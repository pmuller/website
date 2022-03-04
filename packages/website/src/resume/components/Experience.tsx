import React from "react";

import { experience } from "../data";
import { ExperienceStage } from "./ExperienceStage";

export const Experience: React.FC = () => (
  <div>
    {experience.map((stage, index) => (
      <ExperienceStage key={index} {...stage} />
    ))}
  </div>
);
