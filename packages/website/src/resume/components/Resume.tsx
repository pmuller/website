import React from "react";

import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Identity } from "./Identity";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <div>
    <Identity />
    <Contact />
    <Summary />
    <Experience />
    <Education />
  </div>
);
