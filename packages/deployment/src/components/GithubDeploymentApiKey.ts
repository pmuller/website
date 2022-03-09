import { DeploymentApiKey } from "./DeploymentApiKey";
import { ActionsSecret } from "@pulumi/github";
import {
  ComponentResource,
  ComponentResourceOptions,
  Input,
} from "@pulumi/pulumi";

type Inputs = {
  contentBucketArn: Input<string>;
  repository: Input<string>;
};

export class GithubDeploymentApiKey extends ComponentResource {
  public idName: string;
  public secretName: string;

  constructor(name: string, args: Inputs, opts?: ComponentResourceOptions) {
    super("website:GithubDeploymentApiKey", name, {}, opts);
    const apiKey = new DeploymentApiKey("github", args, { parent: this });
    this.idName = `${name}_deployment_api_key_id`;
    this.secretName = `${name}_deployment_api_key_secret`;
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
