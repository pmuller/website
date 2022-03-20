import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";
import { Logger } from "@caporal/core";

export const createInvalidation = async (
  DistributionId: string,
  logger?: Logger,
  client?: CloudFrontClient
): Promise<void> => {
  logger?.info(`Invalidating Cloudfront distribution cache: ${DistributionId}`);
  const cloudfront = client ?? new CloudFrontClient({});
  const { Invalidation } = await cloudfront.send(
    new CreateInvalidationCommand({
      DistributionId,
      InvalidationBatch: {
        CallerReference: new Date().toISOString(),
        Paths: {
          Quantity: 1,
          Items: ["/*"],
        },
      },
    })
  );
  logger?.info(
    `Cloudfront distribution cache invalidation created: ${Invalidation?.Id}`
  );
};
