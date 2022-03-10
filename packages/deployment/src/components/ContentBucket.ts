import { iam, s3 } from "@pulumi/aws";
import {
  ComponentResource,
  ComponentResourceOptions,
  Input,
  Output,
  interpolate,
} from "@pulumi/pulumi";

type Inputs = {
  logsBucketId: Input<string>;
  originAccessIdentityArn: Input<string>;
};

export class ContentBucket extends ComponentResource {
  public id: Output<string>;
  public arn: Output<string>;
  public regionalDomainName: Output<string>;

  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:ContentBucket", name, {}, opts);
    const bucket = this.deployBucket(name, args.logsBucketId);
    this.deployBucketPolicy(
      name,
      bucket.id,
      bucket.arn,
      args.originAccessIdentityArn
    );
    this.id = bucket.id;
    this.arn = bucket.arn;
    this.regionalDomainName = bucket.bucketRegionalDomainName;
    this.registerOutputs();
  }

  private deployBucket(name: string, targetBucket: Input<string>): s3.Bucket {
    return new s3.Bucket(
      `${name}-content`,
      {
        loggings: [
          {
            targetBucket,
            targetPrefix: "s3-content/",
          },
        ],
      },
      { parent: this }
    );
  }

  private deployBucketPolicy(
    name: string,
    bucketId: Input<string>,
    bucketArn: Input<string>,
    originAccessIdentityArn: Input<string>
  ): s3.BucketPolicy {
    const baseStatement = {
      effect: "Allow",
      principals: [
        {
          type: "AWS",
          identifiers: [originAccessIdentityArn],
        },
      ],
    };
    return new s3.BucketPolicy(
      `${name}-content`,
      {
        bucket: bucketId,
        policy: iam.getPolicyDocumentOutput({
          statements: [
            {
              ...baseStatement,
              actions: ["s3:GetObject"],
              resources: [interpolate`${bucketArn}/*`],
            },
            {
              ...baseStatement,
              actions: ["s3:ListBucket"],
              resources: [bucketArn],
            },
          ],
        }).json,
      },
      { parent: this }
    );
  }
}
