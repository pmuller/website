import React from "react";

import { experience } from "../data";
import { ExperienceStage } from "./ExperienceStage";
import { Section } from "./Section";

export const Experience: React.FC = () => (
  <Section>
    <h2>Work Experience</h2>
    {experience.map((stage, index) => (
      <ExperienceStage key={index} {...stage} />
    ))}
  </Section>
);
