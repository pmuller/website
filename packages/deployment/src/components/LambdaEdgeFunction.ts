import { LambdaFunctionInputs } from "../types";
import { LambdaFunction } from "./LambdaFunction";
import { lambda, iam, Provider } from "@pulumi/aws";
import { ComponentResourceOptions } from "@pulumi/pulumi";

export class LambdaEdgeFunction extends LambdaFunction {
  constructor(
    name: string,
    args: LambdaFunctionInputs,
    opts?: Omit<ComponentResourceOptions, "provider">
  ) {
    super(name, args, {
      ...opts,
      provider: new Provider("us-east-1", { region: "us-east-1" }),
    });
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
