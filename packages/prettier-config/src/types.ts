import { Options as BaseOptions } from "prettier";

export type Options = BaseOptions & {
  // @trivago/prettier-plugin-sort-imports
  importOrder?: string[];
  importOrderSeparation?: boolean;
  importOrderSortSpecifiers?: boolean;
};
