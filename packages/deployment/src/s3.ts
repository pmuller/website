import { s3 } from "@pulumi/aws";

export const logsBucket = new s3.Bucket("logs");

export const contentBucket = new s3.Bucket("content", {
  loggings: [
    {
      targetBucket: logsBucket.id,
      targetPrefix: "s3-content/",
    },
  ],
});
