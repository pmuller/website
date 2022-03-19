/* eslint-disable sonarjs/no-duplicate-string,import/no-unused-modules */
import { prepareMetadata } from "./prepareMetadata";

test("base", () =>
  expect(
    prepareMetadata({
      foo: { size: 0 },
      "foo.html": { size: 1 },
      "foo/bar.png": { size: 2 },
      "sitemap.xml": { size: 3 },
    })
  ).toStrictEqual({
    foo: {
      size: 0,
      contentType: "application/octet-stream",
      cacheControl: "public,max-age=86400",
    },
    "foo.html": {
      size: 1,
      contentType: "text/html",
      cacheControl: "public,no-cache",
    },
    "foo/bar.png": {
      size: 2,
      contentType: "image/png",
      cacheControl: "public,max-age=86400",
    },
    "sitemap.xml": {
      size: 3,
      contentType: "text/xml",
      cacheControl: "public,no-cache",
    },
  }));
