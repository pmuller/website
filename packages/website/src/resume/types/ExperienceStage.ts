import { ExperienceSubStage } from "./ExperienceSubStage";
import { Organization } from "./Organization";

export type ExperienceStage = {
  company: Organization;
  location: string;
  // XXX: stage vs. sub-stage is not a great naming
  stages: ExperienceSubStage[];
};
