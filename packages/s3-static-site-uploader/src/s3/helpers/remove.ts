import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Logger } from "@caporal/core";

export const remove = async (
  bucketId: string,
  path: string,
  logger?: Logger,
  client?: S3Client
): Promise<void> => {
  const s3 = client ?? new S3Client({});
  logger?.info(`Deleting ${path}`);
  await s3.send(new DeleteObjectCommand({ Bucket: bucketId, Key: path }));
  logger?.info(`Deleted ${path}`);
};
