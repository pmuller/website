import React from "react";

import { education } from "../data";
import { EducationStage } from "./EducationStage";
import { Section } from "./Section";

export const Education: React.FC = () => (
  <Section>
    <h2>Education</h2>
    {education.map((stage, index) => (
      <EducationStage key={index} {...stage} />
    ))}
  </Section>
);
