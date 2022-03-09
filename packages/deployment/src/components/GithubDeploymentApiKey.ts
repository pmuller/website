import { DeploymentApiKey } from "./DeploymentApiKey";
import { ActionsSecret } from "@pulumi/github";
import {
  ComponentResource,
  ComponentResourceOptions,
  getStack,
  Input,
} from "@pulumi/pulumi";

type Inputs = {
  contentBucketArn: Input<string>;
  repository: Input<string>;
};

const buildSecretName = (prefix: string, suffix: string) =>
  `${getStack()}_${prefix}_deployment_api_key_${suffix}`.toUpperCase();

export class GithubDeploymentApiKey extends ComponentResource {
  public idName: string;
  public secretName: string;

  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:GithubDeploymentApiKey", name, {}, opts);
    const apiKey = new DeploymentApiKey("github", args, { parent: this });
    this.idName = buildSecretName(name, "id");
    this.secretName = buildSecretName(name, "secret");
    const secretOpts = { parent: this, deleteBeforeReplace: true };
    const { repository } = args;
    new ActionsSecret(
      this.idName,
      {
        repository,
        secretName: this.idName,
        plaintextValue: apiKey.id,
      },
      secretOpts
    );
    new ActionsSecret(
      this.secretName,
      {
        repository,
        secretName: this.secretName,
        plaintextValue: apiKey.secret,
      },
      secretOpts
    );
    this.registerOutputs();
  }
}
