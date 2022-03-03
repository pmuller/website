import { Resume } from "../types";
import { education } from "./education";
import { experiences } from "./experiences";

export const resume: Resume = {
  experiences,
  education,
  firstName: "Philippe",
  lastName: "Muller",
  location: "Metz, France",
  contact: [
    {
      label: "philippe.muller@gmail.com",
      url: "mailto:philippe.muller@gmail.com",
      icon: "email",
    },
    {
      label: "pmuller.eu",
      url: "https://pmuller.eu",
      icon: "web",
    },
    {
      label: "pmuller",
      url: "https://github.com/pmuller",
      icon: "github",
    },
    {
      label: "muller",
      url: "https://linkedin.com/in/muller",
      icon: "linkedin",
    },
  ],
  jobTitle: "Software Engineer",
  summary: `\
Software engineer with 20+ years of experience.
Proven ability to leverage full-stack knowledge to build software and infrastructures at scale.
`,
};
