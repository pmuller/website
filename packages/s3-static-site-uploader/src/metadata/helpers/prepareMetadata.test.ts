/* eslint-disable sonarjs/no-duplicate-string,import/no-unused-modules */
import { prepareMetadata } from "./prepareMetadata";

test("base", () =>
  expect(
    prepareMetadata([
      { path: "foo", size: 0 },
      { path: "foo.html", size: 1 },
      { path: "foo/bar.png", size: 2 },
      { path: "sitemap.xml", size: 3 },
    ])
  ).toStrictEqual([
    {
      path: "foo",
      size: 0,
      contentType: "application/octet-stream",
      cacheControl: "public,max-age=86400",
    },
    {
      path: "foo.html",
      size: 1,
      contentType: "text/html",
      cacheControl: "public,no-cache",
    },
    {
      path: "foo/bar.png",
      size: 2,
      contentType: "image/png",
      cacheControl: "public,max-age=86400",
    },
    {
      path: "sitemap.xml",
      size: 3,
      contentType: "text/xml",
      cacheControl: "public,no-cache",
    },
  ]));
