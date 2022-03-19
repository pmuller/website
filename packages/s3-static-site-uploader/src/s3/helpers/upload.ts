import { FileMetadata } from "../../metadata";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Logger } from "@caporal/core";
import { readFile } from "fs/promises";

export const upload = async (
  prefix: string,
  bucketId: string,
  path: string,
  metadata: FileMetadata,
  logger?: Logger,
  client?: S3Client
): Promise<void> => {
  const s3 = client ?? new S3Client({});
  const input = {
    Bucket: bucketId,
    Key: path,
    CacheControl: metadata.cacheControl,
    ContentType: metadata.contentType,
  };
  logger?.info(`Uploading ${path}: ${JSON.stringify(input)}`);
  await s3.send(
    new PutObjectCommand({
      ...input,
      Body: await readFile(`${prefix}/${path}`),
    })
  );
  logger?.info(`Uploaded ${path}`);
};
