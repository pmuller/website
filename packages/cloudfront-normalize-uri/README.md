# cloudfront-normalize-uri

[![Build](https://github.com/pmuller/website/actions/workflows/build-cloudfront-normalize-uri.yaml/badge.svg?branch=develop)](https://github.com/pmuller/website/actions/workflows/build-cloudfront-normalize-uri.yaml)

A Cloudfront function that normalizes Cloudfront requests.

When URI ends with a trailing slash, `index.html` is appended.

## References

- [Add index.html to request URLs that don’t include a file name](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-index.html)
