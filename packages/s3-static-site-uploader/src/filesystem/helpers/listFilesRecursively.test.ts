/* eslint-disable import/no-unused-modules */
import { listFilesRecursively } from "./listFilesRecursively";
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
    const fileHandle = await open("foo", "w");
    await fileHandle.write("test");
    await fileHandle.close();
    expect(await listFilesRecursively(".")).toStrictEqual([
      {
        path: resolve(cwd(), "foo"),
        size: 4,
      },
    ]);
  }));

test("flat", () =>
  withLocalTmpDir(async () => {
    await (await open("foo", "w")).close();
    await (await open("bar", "w")).close();
    await (await open("baz", "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual([
      { path: resolve(cwd(), "bar"), size: 0 },
      { path: resolve(cwd(), "baz"), size: 0 },
      { path: resolve(cwd(), "foo"), size: 0 },
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
      { path: resolve(cwd(), "dir1/bar"), size: 0 },
      { path: resolve(cwd(), "dir1/foo"), size: 0 },
      { path: resolve(cwd(), "dir2/bar"), size: 0 },
      { path: resolve(cwd(), "dir2/baz"), size: 0 },
    ]);
  }));

test("deep", () =>
  withLocalTmpDir(async () => {
    await mkdir(resolve(cwd(), "foo"));
    await mkdir(resolve(cwd(), "foo/bar"));
    await mkdir(resolve(cwd(), "foo/bar/baz"));
    await (await open(resolve(cwd(), "foo/bar/baz/file"), "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual([
      { path: resolve(cwd(), "foo/bar/baz/file"), size: 0 },
    ]);
  }));
