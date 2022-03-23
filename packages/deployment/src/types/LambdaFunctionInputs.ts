import { lambda } from "@pulumi/aws";

export type LambdaFunctionInputs = Omit<
  lambda.FunctionArgs,
  "role" | "name" | "publish"
>;
