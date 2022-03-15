/* eslint-disable import/no-unused-modules */
import { program } from "@caporal/core";

program
  .argument("<local_path>", "Local path of the static website build")
  .argument("<s3_bucket_id>", "ID of the target S3 bucket")
  .option(
    "--dry",
    "Do not actually upload files, simply show what would change"
  )
  .action(({ logger, args, options }) => {
    logger.info(`args: ${JSON.stringify(args)}`);
    logger.info(`options: ${JSON.stringify(options)}`);
  });

program.run();
