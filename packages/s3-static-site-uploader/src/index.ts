/* eslint-disable import/no-unused-modules */
import { synchronize } from "./s3";
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
  .action(async ({ logger, args, options }) =>
    synchronize(
      args.localPath as string,
      args.s3BucketId as string,
      !!options.dry,
      logger
    )
  );

program.run();
