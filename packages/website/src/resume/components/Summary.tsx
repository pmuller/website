import React from "react";

import { summary } from "../data";

export const Summary: React.FC = () => (
  <section>
    <h2>Summary</h2>
    <p>{summary}</p>
  </section>
);
