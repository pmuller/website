import { Repository } from "@pulumi/github";
import { Config } from "@pulumi/pulumi";

// Only create the GitHub repository when deploying the production stack
export const repositoryName =
  // Use "website:github_repository_name" from stack config when available
  // (development stacks)
  new Config().get("github_repository_name") ??
  // or create a new repository (production stack)
  new Repository("website", { name: "website" }).name;
