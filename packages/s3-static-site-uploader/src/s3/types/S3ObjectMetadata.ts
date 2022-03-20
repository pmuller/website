import { LocalFileMetadata } from "../../filesystem";
import { FileMetadata } from "../../metadata";

export type S3ObjectMetadata = LocalFileMetadata &
  Partial<Pick<FileMetadata, "cacheControl" | "contentType">>;
