import { LambdaFunctionInputs } from "../types";
import { LambdaFunction } from "./LambdaFunction";
import { lambda, iam } from "@pulumi/aws";
import { ComponentResourceOptions } from "@pulumi/pulumi";

export class LambdaEdgeFunction extends LambdaFunction {
  constructor(
    name: string,
    args: LambdaFunctionInputs,
    opts?: ComponentResourceOptions
  ) {
    super(name, args, opts);
    // Allow Cloudfront to invoke the Lambda function
    new lambda.Permission(
      `lambda-edge-${this.name}`,
      {
        action: "lambda:GetFunction",
        principal: "edgelambda.amazonaws.com",
        function: this.functionArn,
      },
      { parent: this }
    );
  }

  // eslint-disable-next-line class-methods-use-this
  protected override buildAssumeRolePolicy() {
    return iam.getPolicyDocumentOutput({
      statements: [
        {
          actions: ["sts:AssumeRole"],
          principals: [
            {
              type: "Service",
              identifiers: ["lambda.amazonaws.com", "edgelambda.amazonaws.com"],
            },
          ],
        },
      ],
    }).json;
  }
}
