import { cloudfront } from "@pulumi/aws";
import { Input } from "@pulumi/pulumi";

export const deployCloudfrontDistribution = (
  contentBucketId: Input<string>,
  contentBucketRegionalDomainName: Input<string>,
  originAccessIdentityCloudfrontPath: Input<string>,
  logsBucketDomainName: Input<string>
) =>
  new cloudfront.Distribution("website", {
    origins: [
      {
        originId: contentBucketId,
        domainName: contentBucketRegionalDomainName,
        s3OriginConfig: {
          originAccessIdentity: originAccessIdentityCloudfrontPath,
        },
      },
    ],
    enabled: true,
    priceClass: "PriceClass_100",
    defaultRootObject: "index.html",
    defaultCacheBehavior: {
      targetOriginId: contentBucketId,
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
    },
    loggingConfig: {
      bucket: logsBucketDomainName,
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
