import { AcmValidationRoute53Records } from "./AcmValidationRoute53Records";
import { route53, types } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Input,
  Output,
  StackReference,
} from "@pulumi/pulumi";

type Inputs = {
  productionCloudfrontCertificateDomainValidationOptions: Input<
    types.output.acm.CertificateDomainValidationOption[]
  >;
  productionCloudfrontDistributionDomainName: Input<string>;
  productionCloudfrontHostedZoneId: Input<string>;
};

export class DNS extends ComponentResource {
  public zoneId: Output<string>;

  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:DNS", name, {}, opts);

    const zone = new route53.Zone(
      name,
      { name },
      {
        parent: this,
        // XXX: How can I rename an URN?
        // I manually registered the domain in the console then imported it.
        aliases: [
          "urn:pulumi:production::website::aws:route53/zone:Zone::pmuller.eu",
        ],
      }
    );
    this.zoneId = zone.id;

    // Staging records
    const stagingStack = new StackReference("pmullerpriv/website/development");
    new route53.Record(
      "staging",
      {
        name: "staging.pmuller.eu",
        zoneId: zone.id,
        type: "A",
        aliases: [
          {
            name: stagingStack.requireOutput(
              "cloudfrontDistributionDomainName"
            ),
            zoneId: stagingStack.requireOutput(
              "cloudfrontDistributionHostedZoneId"
            ),
            evaluateTargetHealth: true,
          },
        ],
      },
      { parent: this }
    );
    new AcmValidationRoute53Records(
      "staging",
      {
        zoneId: zone.id,
        domainValidationOptions: stagingStack.requireOutput(
          "cloudfrontCertificateDomainValidationOptions"
        ),
      },
      { parent: this }
    );

    // Production records
    new route53.Record(
      "production",
      {
        name,
        zoneId: zone.id,
        type: "A",
        aliases: [
          {
            name: args.productionCloudfrontDistributionDomainName,
            zoneId: args.productionCloudfrontHostedZoneId,
            evaluateTargetHealth: true,
          },
        ],
      },
      { parent: this }
    );
    new AcmValidationRoute53Records(
      "production",
      {
        zoneId: zone.id,
        domainValidationOptions:
          args.productionCloudfrontCertificateDomainValidationOptions,
      },
      { parent: this }
    );
  }
}
