/* eslint-disable import/no-unused-modules */
import { stripMetadataPathPrefixes } from "./stripMetadataPathPrefixes";

test("absolute", () =>
  expect(
    stripMetadataPathPrefixes(
      { "/foo/bar/baz": { size: 0 }, "/foo/bar/bla": { size: 1 } },
      "/foo/bar"
    )
  ).toStrictEqual({
    baz: { size: 0 },
    bla: { size: 1 },
  }));

test("relative", () =>
  expect(
    stripMetadataPathPrefixes(
      { "../website/public/webpack.stats.json": { size: 42 } },
      "../website/public"
    )
  ).toStrictEqual({ "webpack.stats.json": { size: 42 } }));
