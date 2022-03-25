import {
  ContentBucket,
  DNS,
  GithubDeploymentApiKey,
  WebsiteDistribution,
} from "./components";
import { repositoryName } from "./git";
import { cloudfront, s3 } from "@pulumi/aws";
import { getStack } from "@pulumi/pulumi";

const originAccessIdentity = new cloudfront.OriginAccessIdentity("website");
const logsBucket = new s3.Bucket("logs");
const contentBucket = new ContentBucket("website", {
  logsBucketId: logsBucket.id,
  originAccessIdentityArn: originAccessIdentity.iamArn,
});
const cloudfrontDistribution = new WebsiteDistribution("website", {
  contentBucketId: contentBucket.id,
  contentBucketRegionalDomainName: contentBucket.regionalDomainName,
  originAccessIdentityCloudfrontPath:
    originAccessIdentity.cloudfrontAccessIdentityPath,
  logsBucketDomainName: logsBucket.bucketDomainName,
});

// The DNS zone is only managed by the production stack
if (getStack() === "production")
  new DNS("pmuller.eu", {
    productionCloudfrontCertificateDomainValidationOptions:
      cloudfrontDistribution.certificateDomainValidationOptions,
    productionCloudfrontHostedZoneId: cloudfrontDistribution.hostedZoneId,
    productionCloudfrontDistributionDomainName:
      cloudfrontDistribution.domainName,
  });

export const cloudfrontDistributionDomainName =
  cloudfrontDistribution.domainName;
export const cloudfrontCertificateDomainValidationOptions =
  cloudfrontDistribution.certificateDomainValidationOptions;
export const cloudfrontDistributionHostedZoneId =
  cloudfrontDistribution.hostedZoneId;
export const contentBucketId = contentBucket.id;
export const logsBucketId = logsBucket.id;

new GithubDeploymentApiKey("website", {
  contentBucketArn: contentBucket.arn,
  repository: repositoryName,
});
