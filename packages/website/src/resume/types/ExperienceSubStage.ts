export type ExperienceSubStage = {
  title: string;
  startDate: Date;
  endDate?: Date;
  description: string | JSX.Element;
  techStack?: string[];
};
