export const stripPathPrefix = (path: string, prefix: string): string =>
  path.replace(new RegExp(`^${prefix.replace(/^\.\//, "")}/?`), "");
