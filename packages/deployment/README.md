# pmuller.eu

Here is all the source code of my web site [pmuller.eu](https://pmuller.eu).

This is a yarn monorepo that contains several packages:

- [cloudfront-normalize-uri](./packages/cloudfront-normalize-uri): An AWS Cloudfront Function that normalize URIs for S3 origin integration
- [deployment](./packages/deployment): The Pulumi program that manages the project's resources
- [eslint-config-typescript](./packages/eslint-config-typescript): The reference ESLint configuration
- [prettier-config](./packages/prettier-config): The reference Prettier configuration
- [s3-static-site-uploader](./packages/s3-static-site-uploader): Upload the website builds on S3 with fine-grained Cache-Control metadata
- [website](./packages/website): The website Gatsby app
