import { LambdaFunctionInputs } from "../types";
import { lambda, cloudwatch, iam } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Output,
  getProject,
  getStack,
  interpolate,
} from "@pulumi/pulumi";

export class LambdaFunction extends ComponentResource {
  protected name: string;
  protected fullName: string;
  public logGroupArn: Output<string>;
  public roleArn: Output<string>;
  public functionArn: Output<string>;

  constructor(
    name: string,
    args: LambdaFunctionInputs,
    opts?: ComponentResourceOptions
  ) {
    super("website:LambdaFunction", name, {}, opts);
    this.name = name;
    this.fullName = `${getProject()}-${getStack()}-${name}`;
    this.logGroupArn = this.deployCloudwatchLogGroup().arn;
    this.roleArn = this.deployRole().arn;
    this.functionArn = this.deployFunction(args).arn;
    this.registerOutputs();
  }

  /**
   * Create the function's cloudwatch log group
   */
  deployCloudwatchLogGroup() {
    return new cloudwatch.LogGroup(
      `lambda-${this.name}`,
      {
        retentionInDays: 14,
        name: `/aws/lambda/${this.fullName}`,
      },
      { parent: this }
    );
  }

  // eslint-disable-next-line class-methods-use-this
  protected buildAssumeRolePolicy() {
    return iam.getPolicyDocumentOutput({
      statements: [
        {
          actions: ["sts:AssumeRole"],
          principals: [
            {
              type: "Service",
              identifiers: ["lambda.amazonaws.com"],
            },
          ],
        },
      ],
    }).json;
  }

  /**
   * Create the function's role
   */
  deployRole() {
    const inlinePolicies = [
      {
        name: "CloudwatchWrite",
        policy: iam.getPolicyDocumentOutput({
          statements: [
            {
              resources: [interpolate`${this.logGroupArn}:*`],
              actions: ["logs:CreateLogStream", "logs:PutLogEvents"],
            },
          ],
        }).json,
      },
    ];
    const args = {
      inlinePolicies,
      assumeRolePolicy: this.buildAssumeRolePolicy(),
      path: "/service/lambda/",
      // Role name cannot exceed 64 characters
      // Here we simply truncate at the known IAM limit,
      // but this could bite us when using excessively long projet and/or stack names,
      // resulting in dupplicate role names.
      name: this.fullName.slice(0, 64),
    };
    return new iam.Role(`lambda-${this.name}`, args, { parent: this });
  }

  /**
   * Deploy the Lambda function
   */
  private deployFunction({ ...inputs }: LambdaFunctionInputs) {
    return new lambda.Function(
      this.name,
      { ...inputs, role: this.roleArn, name: this.fullName },
      { parent: this }
    );
  }
}
