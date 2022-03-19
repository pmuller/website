import { LocalFileCollection } from "../types";
import { Logger } from "@caporal/core";
import { readdir, stat } from "fs/promises";
import { join } from "path";

export const listFilesRecursively = async (
  prefix: string,
  logger?: Logger
): Promise<LocalFileCollection> =>
  (
    await Promise.all(
      (
        await readdir(prefix)
      ).map(async (name) => {
        const path = join(prefix, name);
        const stats = await stat(path);
        if (stats.isDirectory()) return listFilesRecursively(path, logger);
        if (stats.isFile()) return { [path]: { size: stats.size } };
        throw new Error(`${path} is not a directory nor a regular file`);
      })
    )
  ).reduce((previous, current) => ({ ...previous, ...current }), {});
