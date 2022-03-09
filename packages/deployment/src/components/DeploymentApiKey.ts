import { iam } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Input,
  interpolate,
  Output,
} from "@pulumi/pulumi";

type Inputs = {
  contentBucketArn: Input<string>;
};

export class DeploymentApiKey extends ComponentResource {
  public id: Output<string>;
  public secret: Output<string>;

  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:DeploymentApiKey", name, {}, opts);
    const user = new iam.User(name, {}, { parent: this });
    const key = new iam.AccessKey(name, { user: user.name }, { parent: this });
    this.attachPolicy(name, user.name, args.contentBucketArn);
    this.id = key.id;
    this.secret = key.secret;
    this.registerOutputs();
  }

  private attachPolicy(
    name: string,
    user: Input<string>,
    contentBucketArn: Input<string>
  ) {
    const policy = iam.getPolicyDocumentOutput({
      statements: [
        {
          effect: "Allow",
          actions: ["s3:ListBucket"],
          resources: [contentBucketArn],
        },
        {
          effect: "Allow",
          actions: ["s3:PutObject", "s3:GetObject", "s3:DeleteObject"],
          resources: [interpolate`${contentBucketArn}/*`],
        },
        {
          effect: "Allow",
          actions: ["cloudfront:CreateInvalidation"],
          // AWS doesn't allow matching a specific distribution
          resources: ["*"],
        },
      ],
    }).json;
    new iam.UserPolicy(name, { user, policy }, { parent: this });
  }
}
