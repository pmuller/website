import { LambdaEdgeFunction } from "./LambdaEdgeFunction";
import { lambda } from "@pulumi/aws";
import { asset, ComponentResourceOptions } from "@pulumi/pulumi";

type Inputs = Omit<
  lambda.FunctionArgs,
  "role" | "name" | "code" | "handler" | "runtime"
>;

export class NormalizeUriLambdaEdgeFunction extends LambdaEdgeFunction {
  constructor(name?: string, args?: Inputs, opts?: ComponentResourceOptions) {
    super(
      name ?? "cloudfront-normalize-uri",
      {
        timeout: 5,
        ...args,
        handler: "index.handler",
        runtime: lambda.Runtime.NodeJS14dX,
        code: new asset.FileArchive("../../cloudfront-normalize-uri/dist"),
      },
      opts
    );
  }
}
