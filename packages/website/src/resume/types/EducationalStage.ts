import { Organization } from "./Organization";

export type EducationalStage = {
  school: Organization;
  degree?: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
};
