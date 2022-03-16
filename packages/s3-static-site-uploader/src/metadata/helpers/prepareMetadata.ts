import { defaultConfiguration, Configuration } from "../../config";
import { LocalFileMetadata } from "../../filesystem";
import { FileMetadata } from "../types";
import minimatch from "minimatch";

export const prepareMetadata = (
  files: LocalFileMetadata[],
  configuration: Configuration = defaultConfiguration
): FileMetadata[] =>
  files.map(({ path, size }) => {
    const contentTypeMatches = Object.entries(
      configuration.contentTypes
    ).filter(([pattern]) => minimatch(path, pattern));
    if (contentTypeMatches.length > 1)
      throw new Error(`More than 1 content type pattern matches ${path}`);
    const contentType =
      contentTypeMatches[0]?.[1] ?? configuration.defaultContentType;
    const cacheControlMatches = Object.entries(
      configuration.cacheControl
    ).filter(([pattern]) => minimatch(path, pattern));
    if (cacheControlMatches.length > 1)
      throw new Error(`More than 1 cache control pattern matches ${path}`);
    const cacheControl =
      cacheControlMatches[0]?.[1] ?? configuration.defaultCacheControlPolicy;
    return { contentType, cacheControl, path, size };
  });
