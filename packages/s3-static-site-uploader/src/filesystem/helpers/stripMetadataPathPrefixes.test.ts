/* eslint-disable import/no-unused-modules */
import { stripMetadataPathPrefixes } from "./stripMetadataPathPrefixes";

test("absolute", () =>
  expect(
    stripMetadataPathPrefixes(
      [
        { path: "/foo/bar/baz", size: 0 },
        { path: "/foo/bar/bla", size: 1 },
      ],
      "/foo/bar"
    )
  ).toStrictEqual([
    { path: "baz", size: 0 },
    { path: "bla", size: 1 },
  ]));

test("relative", () =>
  expect(
    stripMetadataPathPrefixes(
      [{ path: "../website/public/webpack.stats.json", size: 42 }],
      "../website/public"
    )
  ).toStrictEqual([{ path: "webpack.stats.json", size: 42 }]));
