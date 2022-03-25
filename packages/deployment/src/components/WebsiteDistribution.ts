import { acm, cloudfront, route53 } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Config,
  Input,
  Output,
  log,
} from "@pulumi/pulumi";
import { readFileSync } from "fs";

type Inputs = {
  contentBucketId: Input<string>;
  contentBucketRegionalDomainName: Input<string>;
  originAccessIdentityCloudfrontPath: Input<string>;
  logsBucketDomainName: Input<string>;
  zoneId?: Input<string>;
};

export class WebsiteDistribution extends ComponentResource {
  public domainName: Output<string>;

  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:WebsiteDistribution", name, {}, opts);
    const config = new Config();
    const aliases = config.requireObject<string[]>("cloudfront_aliases");
    const [domainName] = aliases;
    const subjectAlternativeNames = aliases.slice(1);
    const certificate = new acm.Certificate(
      name,
      {
        domainName,
        subjectAlternativeNames,
        validationMethod: "DNS",
      },
      { parent: this }
    );
    if (args.zoneId)
      certificate.domainValidationOptions.apply((options) =>
        options.map(
          (option) =>
            new route53.Record(
              `acm-validation-${option.domainName}`,
              {
                zoneId: args.zoneId as Input<string>,
                name: option.resourceRecordName,
                type: option.resourceRecordType,
                records: [option.resourceRecordValue],
                ttl: 300,
              },
              { parent: this }
            )
        )
      );
    const distribution = certificate.status.apply((status) => {
      const certificateConfig =
        status === "SUCCESS"
          ? {
              aliases,
              viewerCertificate: {
                acmCertificateArn: certificate.arn,
                sslSupportMethod: "sni-only",
              },
            }
          : {
              viewerCertificate: {
                cloudfrontDefaultCertificate: true,
              },
            };
      if (status !== "SUCCESS")
        log.warn(
          `Cannot use certificate with Cloudfront because it is not ready: ${status}`
        );
      return new cloudfront.Distribution(
        name,
        {
          ...certificateConfig,
          origins: [
            {
              originId: args.contentBucketId,
              domainName: args.contentBucketRegionalDomainName,
              s3OriginConfig: {
                originAccessIdentity: args.originAccessIdentityCloudfrontPath,
              },
            },
          ],
          enabled: true,
          priceClass: "PriceClass_100",
          defaultRootObject: "index.html",
          defaultCacheBehavior: {
            targetOriginId: args.contentBucketId,
            compress: true,
            viewerProtocolPolicy: "redirect-to-https",
            allowedMethods: ["GET", "HEAD", "OPTIONS"],
            cachedMethods: ["GET", "HEAD", "OPTIONS"],
            forwardedValues: {
              cookies: {
                forward: "none",
              },
              queryString: false,
              headers: [
                // Forward CORS headers
                "Access-Control-Request-Headers",
                "Access-Control-Request-Method",
                "Origin",
              ],
            },
            minTtl: 0,
            defaultTtl: 10 * 60, // 10m
            maxTtl: 60 * 60 * 24 * 90, // 90d
            functionAssociations: [
              {
                functionArn: new cloudfront.Function(
                  "normalize-uri",
                  {
                    runtime: "cloudfront-js-1.0",
                    code: readFileSync(
                      "../../cloudfront-normalize-uri/dist/index.js"
                    ).toString(),
                  },
                  { parent: this }
                ).arn,
                eventType: "viewer-request",
              },
            ],
          },
          loggingConfig: {
            bucket: args.logsBucketDomainName,
            includeCookies: false,
            prefix: "cloudfront/",
          },
          restrictions: {
            geoRestriction: {
              restrictionType: "none",
            },
          },
          customErrorResponses: [
            {
              errorCode: 404,
              responseCode: 404,
              responsePagePath: "/404.html",
            },
          ],
        }
        //{ parent: this }
      );
    });
    this.domainName = distribution.domainName;
  }
}
