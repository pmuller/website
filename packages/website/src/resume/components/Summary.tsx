import React from "react";

import { summary } from "../data";
import { Section } from "./Section";

export const Summary: React.FC = () => (
  <Section>
    <h2>Summary</h2>
    <p>{summary}</p>
  </Section>
);
