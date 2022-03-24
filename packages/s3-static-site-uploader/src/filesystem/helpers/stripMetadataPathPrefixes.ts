import { stripPathPrefix } from "./stripPathPrefix";

export const stripMetadataPathPrefixes = <
  TCollection extends Record<string, unknown>
>(
  files: TCollection,
  prefix: string
): TCollection =>
  Object.entries(files).reduce(
    (files, [path, data]) => ({
      ...files,
      [stripPathPrefix(path, prefix)]: data,
    }),
    {} as TCollection
  );
