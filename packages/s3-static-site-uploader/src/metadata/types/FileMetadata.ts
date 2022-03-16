import { LocalFileMetadata } from "../../filesystem";

export type FileMetadata = LocalFileMetadata & {
  contentType: string;
  cacheControl: string;
};
