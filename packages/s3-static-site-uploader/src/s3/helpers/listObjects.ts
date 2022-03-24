import {
  HeadObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

import { S3ObjectCollection } from "../types";

export const listObjects = async (
  bucketId: string,
  client?: S3Client
): Promise<S3ObjectCollection> => {
  const s3 = client ?? new S3Client({});
  const command = new ListObjectsV2Command({ Bucket: bucketId });
  const response = await s3.send(command);
  if (!response.Contents) return {};
  const objects = await Promise.all(
    response.Contents.map(async ({ Key, Size }) => {
      const { CacheControl, ContentType } = await s3.send(
        new HeadObjectCommand({ Key, Bucket: bucketId })
      );
      if (!Key || !Size)
        throw new Error(`Bogus object data: Key=${Key} Size=${Size}`);
      return {
        [Key]: {
          size: Size,
          cacheControl: CacheControl,
          contentType: ContentType,
        },
      };
    })
  );
  return objects.reduce(
    (previous, current) => ({ ...previous, ...current }),
    {} as S3ObjectCollection
  );
};
