import {
  ContentBucket,
  GithubDeploymentApiKey,
  WebsiteDistribution,
} from "./components";
import { repositoryName } from "./git";
import { cloudfront, s3 } from "@pulumi/aws";

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

export const cloudfrontDistributionDomainName =
  cloudfrontDistribution.domainName;
export const contentBucketId = contentBucket.id;
export const logsBucketId = logsBucket.id;

new GithubDeploymentApiKey("website", {
  contentBucketArn: contentBucket.arn,
  repository: repositoryName,
});
