/* eslint-disable sonarjs/no-duplicate-string,import/no-unused-modules */
import { prepareMetadata } from "./prepareMetadata";

test("base", () =>
  expect(
    prepareMetadata(["foo", "foo.html", "foo/bar.png", "sitemap.xml"])
  ).toStrictEqual([
    {
      path: "foo",
      contentType: "application/octet-stream",
      cacheControl: "public,max-age=86400",
    },
    {
      path: "foo.html",
      contentType: "text/html",
      cacheControl: "public,no-cache",
    },
    {
      path: "foo/bar.png",
      contentType: "image/png",
      cacheControl: "public,max-age=86400",
    },
    {
      path: "sitemap.xml",
      contentType: "text/xml",
      cacheControl: "public,no-cache",
    },
  ]));
