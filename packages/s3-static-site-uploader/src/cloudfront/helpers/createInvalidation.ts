import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";
import { Logger } from "@caporal/core";

export const createInvalidation = async (
  DistributionId: string,
  paths: string[],
  logger?: Logger,
  client?: CloudFrontClient
): Promise<void> => {
  logger?.info(`Invalidating Cloudfront distribution cache: ${DistributionId}`);
  const cloudfront = client ?? new CloudFrontClient({});
  const Items = paths.map((path) => `/${path}`);
  logger?.debug(`Items: ${JSON.stringify(Items)}`);
  const { Invalidation } = await cloudfront.send(
    new CreateInvalidationCommand({
      DistributionId,
      InvalidationBatch: {
        CallerReference: new Date().toISOString(),
        Paths: { Items, Quantity: Items.length },
      },
    })
  );
  logger?.info(
    `Cloudfront distribution cache invalidation created: ${Invalidation?.Id}`
  );
};
