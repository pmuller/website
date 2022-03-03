import { EducationalStage } from "./EducationalStage";
import { Experience } from "./Experience";

export type Resume = {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  jobTitle: string;
  summary: string;
  experiences: Experience[];
  education: EducationalStage[];
};
