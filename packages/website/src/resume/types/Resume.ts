import { EducationalStage } from "./EducationalStage";
import { Experience } from "./Experience";

export type Resume = {
  experiences: Experience[];
  education: EducationalStage[];
};
