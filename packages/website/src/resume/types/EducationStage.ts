import { Organization } from "./Organization";

export type EducationStage = {
  school: Organization;
  degree?: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
};
