import { ContentBucket } from "./components";
import { repository } from "./git";
import { cloudfront, s3 } from "@pulumi/aws";

const originAccessIdentity = new cloudfront.OriginAccessIdentity("website");
export const logsBucket = new s3.Bucket("logs");
export const contentBucket = new ContentBucket("website", {
  logsBucketId: logsBucket.id,
  originAccessIdentityArn: originAccessIdentity.iamArn,
});

export { repository };
