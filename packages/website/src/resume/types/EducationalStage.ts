import { School } from "./School";

export type EducationalStage = {
  school: School;
  degree?: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
};
