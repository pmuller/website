import React from "react";

import { education } from "../data";
import { EducationStage } from "./EducationStage";

export const Education: React.FC = () => (
  <section>
    <h2>Education</h2>
    {education.map((stage, index) => (
      <EducationStage key={index} {...stage} />
    ))}
  </section>
);
