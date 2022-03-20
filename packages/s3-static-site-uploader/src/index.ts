/* eslint-disable import/no-unused-modules */
import { createInvalidation } from "./cloudfront";
import { synchronize } from "./s3";
import { program } from "@caporal/core";

program
  .argument("<local_path>", "Local path of the static website build", {
    validator: program.STRING,
  })
  .argument("<s3_bucket_id>", "ID of the target S3 bucket")
  .option(
    "--cloudfront-distribution-id <cloudfront_distribution_id>",
    "Clear the requested Cloudfront distribution cache"
  )
  .option(
    "--dry",
    "Do not actually upload files, simply show what would change"
  )
  .action(({ logger, args, options }) =>
    synchronize(
      args.localPath as string,
      args.s3BucketId as string,
      !!options.dry,
      logger
    ).then(() =>
      !options.dry && options.cloudfrontDistributionId
        ? createInvalidation(options.cloudfrontDistributionId as string, logger)
        : undefined
    )
  );

program.run();
