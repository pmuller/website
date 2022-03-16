/* eslint-disable import/no-unused-modules */
import { stripPathPrefix } from "./stripPathPrefix";

test("simple", () =>
  expect(stripPathPrefix("/foo/bar/baz", "/foo/")).toBe("bar/baz"));

test("trailing slash", () =>
  expect(stripPathPrefix("/foo/bar/baz", "/foo")).toBe("bar/baz"));
