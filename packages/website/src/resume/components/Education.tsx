import React from "react";

import { education } from "../data";
import { EducationStage } from "./EducationStage";

export const Education: React.FC = () => (
  <div>
    {education.map((stage, index) => (
      <EducationStage key={index} {...stage} />
    ))}
  </div>
);
