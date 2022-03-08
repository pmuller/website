import { s3 } from "@pulumi/aws";
import { getProject, getStack } from "@pulumi/pulumi";

export const logsBucket = new s3.Bucket("logs");

export const contentBucket = new s3.Bucket("content", {
  loggings: [
    {
      targetBucket: logsBucket.id,
      targetPrefix: `${getProject()}/${getStack()}/s3/`,
    },
  ],
});
