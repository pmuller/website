import { Configuration } from "../types";

export const defaultConfiguration: Configuration = {
  contentTypes: {
    "**/*.jpg": "image/jpeg",
    "**/*.png": "image/png",
    "**/*.ico": "image/x-icon",
    "**/*.svg": "image/svg+xml",
    "**/*.html": "text/html",
    "**/*.xml": "text/xml",
    "**/*.css": "text/css",
    "**/*.js": "text/javascript",
    "**/*.json": "application/json",
    "**/*.txt": "text/plain",
    "**/*.vtt": "text/vtt",
    "**/*.woff": "font/woff",
    "**/*.woff2": "font/woff2",
    "**/*.eot": "application/vnd.ms-fontobject",
    "**/*.ttf": "font/ttf",
    "**/*.mp3": "audio/mpeg",
    "**/*.mp4": "video/mp4",
    "**/*.cr2": "image/x-canon-cr2",
    "**/*.pdf": "application/pdf",
    "**/*.tif": "image/tiff",
    "**/*.wasm": "application/wasm",
  },
  defaultContentType: "application/octet-stream",
  cacheControl: {
    "**/*.html": "public,no-cache",
    "sitemap.xml": "public,no-cache",
  },
  defaultCacheControlPolicy: `public,max-age=${60 * 60 * 24}`, // 1 day
};
