/* eslint-disable import/no-unused-modules */
import { listFilesRecursively } from "./listFilesRecursively";
import { open, mkdir } from "fs/promises";
import withLocalTmpDir from "with-local-tmp-dir";

test("empty", () =>
  withLocalTmpDir(() =>
    listFilesRecursively(".").then((result) => expect(result).toStrictEqual({}))
  ));

test("single", () =>
  withLocalTmpDir(async () => {
    const fileHandle = await open("foo", "w");
    await fileHandle.write("test");
    await fileHandle.close();
    expect(await listFilesRecursively(".")).toStrictEqual({ foo: { size: 4 } });
  }));

test("flat", () =>
  withLocalTmpDir(async () => {
    await (await open("foo", "w")).close();
    await (await open("bar", "w")).close();
    await (await open("baz", "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual({
      bar: { size: 0 },
      baz: { size: 0 },
      foo: { size: 0 },
    });
  }));

test("recursive", () =>
  withLocalTmpDir(async () => {
    await mkdir("dir1");
    await mkdir("dir2");
    await (await open("dir1/foo", "w")).close();
    await (await open("dir1/bar", "w")).close();
    await (await open("dir2/baz", "w")).close();
    await (await open("dir2/bar", "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual({
      "dir1/bar": { size: 0 },
      "dir1/foo": { size: 0 },
      "dir2/bar": { size: 0 },
      "dir2/baz": { size: 0 },
    });
  }));

test("deep", () =>
  withLocalTmpDir(async () => {
    await mkdir("foo");
    await mkdir("foo/bar");
    await mkdir("foo/bar/baz");
    await (await open("foo/bar/baz/file", "w")).close();
    const result = await listFilesRecursively(".");
    expect(result).toStrictEqual({
      "foo/bar/baz/file": { size: 0 },
    });
  }));
