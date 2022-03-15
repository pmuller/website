/* eslint-disable import/no-unused-modules */
import { listFilesRecursively } from "./filesystem";
import { open, mkdir } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";
import withLocalTmpDir from "with-local-tmp-dir";

test("empty", () =>
  withLocalTmpDir(() =>
    listFilesRecursively(".").then((result) => expect(result).toStrictEqual([]))
  ));

test("single", () =>
  withLocalTmpDir(async () => {
    await (await open("foo", "w")).close();
    expect(await listFilesRecursively(".")).toStrictEqual([
      resolve(cwd(), "foo"),
    ]);
  }));

test("flat", () =>
  withLocalTmpDir(async () => {
    await (await open("foo", "w")).close();
    await (await open("bar", "w")).close();
    await (await open("baz", "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual([
      resolve(cwd(), "bar"),
      resolve(cwd(), "baz"),
      resolve(cwd(), "foo"),
    ]);
  }));

test("recursive", () =>
  withLocalTmpDir(async () => {
    await mkdir(resolve(cwd(), "dir1"));
    await mkdir(resolve(cwd(), "dir2"));
    await (await open(resolve(cwd(), "dir1/foo"), "w")).close();
    await (await open(resolve(cwd(), "dir1/bar"), "w")).close();
    await (await open(resolve(cwd(), "dir2/baz"), "w")).close();
    await (await open(resolve(cwd(), "dir2/bar"), "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual([
      resolve(cwd(), "dir1/bar"),
      resolve(cwd(), "dir1/foo"),
      resolve(cwd(), "dir2/bar"),
      resolve(cwd(), "dir2/baz"),
    ]);
  }));

test("deep", () =>
  withLocalTmpDir(async () => {
    await mkdir(resolve(cwd(), "foo"));
    await mkdir(resolve(cwd(), "foo/bar"));
    await mkdir(resolve(cwd(), "foo/bar/baz"));
    await (await open(resolve(cwd(), "foo/bar/baz/file"), "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual([resolve(cwd(), "foo/bar/baz/file")]);
  }));
