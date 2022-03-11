import React from "react";

import { experience } from "../data";
import { ExperienceStage } from "./ExperienceStage";

export const Experience: React.FC = () => (
  <section>
    <h2>Work Experience</h2>
    {experience.map((stage, index) => (
      <ExperienceStage key={index} {...stage} />
    ))}
  </section>
);
