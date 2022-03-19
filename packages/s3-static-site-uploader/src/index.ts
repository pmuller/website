/* eslint-disable import/no-unused-modules */
import { listFilesRecursively, stripMetadataPathPrefixes } from "./filesystem";
import { prepareMetadata } from "./metadata";
import { listObjects } from "./s3";
import { program } from "@caporal/core";

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
    logger.info(
      `${Object.values(localFiles).length} localFiles: ${JSON.stringify(
        localFiles,
        null,
        2
      )}`
    );
    const remoteFiles = await listObjects(args.s3BucketId as string);
    logger.info(
      `${Object.values(remoteFiles).length} remoteFiles: ${JSON.stringify(
        remoteFiles,
        null,
        2
      )}`
    );
  });

program.run();
