import React from "react";

import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <div>
    <Header />
    <Summary />
    <Experience />
    <Education />
  </div>
);
