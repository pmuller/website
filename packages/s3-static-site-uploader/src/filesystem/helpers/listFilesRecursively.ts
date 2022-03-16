import { LocalFileMetadata } from "../types";
import { Logger } from "@caporal/core";
import { readdir, stat } from "fs/promises";
import { join } from "path";

export const listFilesRecursively = async (
  path: string,
  logger?: Logger
): Promise<LocalFileMetadata[]> =>
  (
    await Promise.all(
      (
        await readdir(path)
      ).map(async (name) => {
        const fullPath = join(path, name);
        const pathStats = await stat(fullPath);

        if (pathStats.isDirectory())
          return listFilesRecursively(fullPath, logger);

        if (pathStats.isFile())
          return [{ path: fullPath, size: pathStats.size }];

        logger?.warn(
          `Ignoring ${fullPath} because it is not a directory nor a regular file`
        );
        return [];
      })
    )
  ).flat();
