import { LocalFileMetadata } from "../types";
import { stripPathPrefix } from "./stripPathPrefix";

export const stripMetadataPathPrefixes = (
  metadata: LocalFileMetadata[],
  prefix: string
): LocalFileMetadata[] =>
  metadata.map(({ path, ...data }) => ({
    path: stripPathPrefix(path, prefix),
    ...data,
  }));
