import { Organization } from "./Organization";

export type Experience = {
  title: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  company: Organization;
  description: string;
  techStack?: string[];
};
