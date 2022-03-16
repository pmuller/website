import { FileMetadata } from "../../metadata";

export type S3ObjectMetadata = Pick<FileMetadata, "path" | "size"> &
  Partial<Pick<FileMetadata, "cacheControl" | "contentType">>;
