import { Logger } from "@caporal/core";
import { readdir, stat } from "fs/promises";
import { resolve } from "path";

export const listFilesRecursively = async (
  path: string,
  logger?: Logger
): Promise<string[]> =>
  (
    await Promise.all(
      (
        await readdir(path)
      ).map(async (name) => {
        const fullPath = resolve(path, name);
        const pathStats = await stat(fullPath);

        if (pathStats.isDirectory())
          return listFilesRecursively(fullPath, logger);

        if (pathStats.isFile()) return [fullPath];

        logger?.warn(
          `Ignoring ${fullPath} because it is not a directory nor a regular file`
        );
        return [];
      })
    )
  ).flat();
