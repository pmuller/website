import { Repository } from "@pulumi/github";

const name = "website";

export const repository = new Repository(name, { name });
