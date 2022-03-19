import {
  listFilesRecursively,
  stripMetadataPathPrefixes,
} from "../../filesystem";
import { prepareMetadata } from "../../metadata";
import { listObjects } from "./listObjects";
import { remove } from "./remove";
import { upload } from "./upload";
import { S3Client } from "@aws-sdk/client-s3";
import { Logger } from "@caporal/core";
import { addedDiff, deletedDiff, updatedDiff } from "deep-object-diff";

export const synchronize = async (
  localPath: string,
  bucketId: string,
  dry: boolean,
  logger?: Logger
): Promise<void> => {
  logger?.info(
    `Synchronizing local path ${localPath} with S3 bucket ${bucketId}`
  );
  const s3 = new S3Client({});
  const localFiles = stripMetadataPathPrefixes(
    prepareMetadata(await listFilesRecursively(localPath, logger)),
    localPath
  );
  const remoteFiles = await listObjects(bucketId, s3);
  const addedFiles = addedDiff(remoteFiles, localFiles);
  const updatedFiles = updatedDiff(remoteFiles, localFiles);
  const deletedFiles = deletedDiff(remoteFiles, localFiles);

  logger?.info("Uploading added objects");
  if (dry) logger?.info(`Added: ${JSON.stringify(addedFiles, null, 2)}`);
  else
    await Promise.all(
      Object.entries(addedFiles).map(([path, data]) =>
        upload(localPath, bucketId, path, data, logger, s3)
      )
    );

  logger?.info("Updating existing objects");
  if (dry) logger?.info(`Updated: ${JSON.stringify(updatedFiles, null, 2)}`);
  else
    await Promise.all(
      Object.entries(updatedFiles).map(([path, data]) =>
        upload(localPath, bucketId, path, data, logger, s3)
      )
    );

  logger?.info("Deleting removed objects");
  if (dry) logger?.info(`Deleted: ${JSON.stringify(deletedFiles, null, 2)}`);
  else
    await Promise.all(
      Object.keys(deletedFiles).map((path) =>
        remove(bucketId, path, logger, s3)
      )
    );

  if (!dry) logger?.info("Synchronization complete");
};
