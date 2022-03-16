import { S3ObjectMetadata } from "../types";
import {
  S3Client,
  ListObjectsV2Command,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";

export const listObjects = async (
  bucketId: string,
  client?: S3Client
): Promise<S3ObjectMetadata[]> => {
  const s3 = client ?? new S3Client({});
  const command = new ListObjectsV2Command({ Bucket: bucketId });
  const response = await s3.send(command);
  if (!response.Contents) return [];
  return Promise.all(
    response.Contents.map(async ({ Key, Size }) => {
      const { CacheControl, ContentType } = await s3.send(
        new HeadObjectCommand({ Key, Bucket: bucketId })
      );
      if (!Key || !Size)
        throw new Error(`Bogus object data: Key=${Key} Size=${Size}`);
      return {
        path: Key,
        size: Size,
        cacheControl: CacheControl,
        contentType: ContentType,
      };
    })
  );
};
