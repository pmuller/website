import React from "react";

import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { ResumeContainer } from "./ResumeContainer";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <ResumeContainer>
    <Header />
    <Summary />
    <Experience />
    <Education />
  </ResumeContainer>
);
