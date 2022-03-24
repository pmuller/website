import { cloudfront } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Input,
  Output,
} from "@pulumi/pulumi";
import { readFileSync } from "fs";

type Inputs = {
  contentBucketId: Input<string>;
  contentBucketRegionalDomainName: Input<string>;
  originAccessIdentityCloudfrontPath: Input<string>;
  logsBucketDomainName: Input<string>;
};

export class WebsiteDistribution extends ComponentResource {
  public domainName: Output<string>;
  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:WebsiteDistribution", name, {}, opts);
    const distribution = new cloudfront.Distribution(name, {
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
      viewerCertificate: {
        cloudfrontDefaultCertificate: true,
      },
      customErrorResponses: [
        {
          errorCode: 404,
          responseCode: 404,
          responsePagePath: "/404.html",
        },
      ],
    });
    this.domainName = distribution.domainName;
  }
}
