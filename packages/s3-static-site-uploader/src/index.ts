/* eslint-disable import/no-unused-modules */
import { program } from "@caporal/core";

import { createInvalidation } from "./cloudfront";
import { synchronize } from "./s3";

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
    ).then((modifiedFiles) =>
      !options.dry &&
      options.cloudfrontDistributionId &&
      modifiedFiles.length > 0
        ? createInvalidation(
            options.cloudfrontDistributionId as string,
            modifiedFiles,
            logger
          )
        : undefined
    )
  );

program.run();
