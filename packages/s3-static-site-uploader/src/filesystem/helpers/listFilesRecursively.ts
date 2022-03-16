import { LocalFileMetadata } from "../types";
import { Logger } from "@caporal/core";
import { readdir, stat } from "fs/promises";
import { join } from "path";

export const listFilesRecursively = async (
  prefix: string,
  logger?: Logger
): Promise<LocalFileMetadata[]> =>
  (
    await Promise.all(
      (
        await readdir(prefix)
      ).map(async (name) => {
        const path = join(prefix, name);
        const stats = await stat(path);

        if (stats.isDirectory()) return listFilesRecursively(path, logger);

        if (stats.isFile()) return [{ path, size: stats.size }];

        logger?.warn(
          `Ignoring ${path} because it is not a directory nor a regular file`
        );
        return [];
      })
    )
  ).flat();
