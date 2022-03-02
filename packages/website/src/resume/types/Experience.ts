import { Company } from "./Company";

export type Experience = {
  title: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  company: Company;
  description: string;
  techStack?: string[];
};
