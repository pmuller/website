import { Organization } from "./Organization";

export type EducationStage = {
  school: Organization;
  degree?: string;
  description?: string | JSX.Element;
  startDate: Date;
  endDate?: Date;
};
