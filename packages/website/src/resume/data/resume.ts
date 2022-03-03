import { Resume } from "../types";
import { education } from "./education";
import { experiences } from "./experiences";

export const resume: Resume = {
  experiences,
  education,
  firstName: "Philippe",
  lastName: "Muller",
  location: "Metz, France",
  website: "https://pmuller.eu",
  github: "pmuller",
  linkedin: "muller",
  jobTitle: "Software Engineer",
  summary: `\
Software engineer with 20+ years of experience.
Proven ability to leverage full-stack knowledge to build software and infrastructures at scale.
`,
};
