import { NormalizeUriLambdaEdgeFunction } from "./NormalizeUriLambdaEdgeFunction";
import { cloudfront } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Input,
  Output,
} from "@pulumi/pulumi";

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
        lambdaFunctionAssociations: [
          {
            lambdaArn: new NormalizeUriLambdaEdgeFunction(
              undefined,
              undefined,
              { parent: this }
            ).functionArn,
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
