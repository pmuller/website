import { LocalFileCollection } from "../types";
import { stripPathPrefix } from "./stripPathPrefix";

export const stripMetadataPathPrefixes = (
  files: LocalFileCollection,
  prefix: string
): LocalFileCollection =>
  Object.entries(files).reduce(
    (files, [path, data]) => ({
      ...files,
      [stripPathPrefix(path, prefix)]: data,
    }),
    {} as LocalFileCollection
  );
