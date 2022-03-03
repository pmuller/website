import { EducationalStage } from "./EducationalStage";
import { Experience } from "./Experience";

export type Resume = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  experiences: Experience[];
  education: EducationalStage[];
};
