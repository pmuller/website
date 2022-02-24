/* eslint-disable import/no-unused-modules */
import { Options } from "./types";

const config: Options = {
  // Prettier options (defaults)
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  // @trivago/prettier-plugin-sort-imports
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  importOrder: ["^[^.](.*)$", "^[./]"],
};

export = config;
