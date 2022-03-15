/* eslint-disable import/no-unused-modules */
import { listFilesRecursively } from "./filesystem";
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
    const files = await listFilesRecursively(args.localPath as string, logger);
    logger.info(`files: ${JSON.stringify(files)}`);
  });

program.run();
