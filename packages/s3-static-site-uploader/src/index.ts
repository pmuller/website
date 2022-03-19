/* eslint-disable import/no-unused-modules */
import { listFilesRecursively, stripMetadataPathPrefixes } from "./filesystem";
import { prepareMetadata } from "./metadata";
import { listObjects } from "./s3";
import { program } from "@caporal/core";
import { detailedDiff } from "deep-object-diff";

program
  .argument("<local_path>", "Local path of the static website build", {
    validator: program.STRING,
  })
  .argument("<s3_bucket_id>", "ID of the target S3 bucket")
  .option(
    "--dry",
    "Do not actually upload files, simply show what would change"
  )
  .action(async ({ logger, args, options }) => {
    logger.info(`args: ${JSON.stringify(args)}`);
    logger.info(`options: ${JSON.stringify(options)}`);
    const prefix = args.localPath as string;
    const localFiles = stripMetadataPathPrefixes(
      prepareMetadata(await listFilesRecursively(prefix, logger)),
      prefix
    );
    const remoteFiles = await listObjects(args.s3BucketId as string);
    const filesDiff = detailedDiff(remoteFiles, localFiles);
    logger.info(`Diff: ${JSON.stringify(filesDiff, null, 2)}`);
  });

program.run();
