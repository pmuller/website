import { route53, types } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Input,
  output,
} from "@pulumi/pulumi";

type Inputs = {
  zoneId: Input<string>;
  domainValidationOptions: Input<
    types.output.acm.CertificateDomainValidationOption[]
  >;
};

export class AcmValidationRoute53Records extends ComponentResource {
  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:AcmValidationRoute53Records", name, {}, opts);
    output(args.domainValidationOptions).apply((options) =>
      options.forEach(
        (option) =>
          new route53.Record(
            `acm-validation-${option.domainName}`,
            {
              zoneId: args.zoneId,
              name: option.resourceRecordName,
              type: option.resourceRecordType,
              records: [option.resourceRecordValue],
              ttl: 300,
            },
            { parent: this }
          )
      )
    );
    this.registerOutputs();
  }
}
