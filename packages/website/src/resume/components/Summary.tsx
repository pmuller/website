import React from "react";

import { summary } from "../data";
import { SummaryContainer } from "./SummaryContainer";

export const Summary: React.FC = () => (
  <SummaryContainer>
    <h2>Summary</h2>
    <p>{summary}</p>
  </SummaryContainer>
);
