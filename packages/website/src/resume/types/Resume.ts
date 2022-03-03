import { ContactMethod } from "./ContactMethod";
import { EducationalStage } from "./EducationalStage";
import { Experience } from "./Experience";

export type Resume = {
  firstName: string;
  lastName: string;
  contact: ContactMethod[];
  location: string;
  jobTitle: string;
  summary: string;
  experiences: Experience[];
  education: EducationalStage[];
};
