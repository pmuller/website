import { Organization } from "./Organization";

export type ExperienceStage = {
  title: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  company: Organization;
  description: string | JSX.Element;
  techStack?: string[];
};
