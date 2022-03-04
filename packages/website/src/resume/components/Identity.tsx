import React from "react";

import { identity } from "../data";

export const Identity: React.FC = () => (
  <div>
    <h1>
      {identity.firstName} {identity.lastName}
    </h1>
    <h2>{identity.jobTitle}</h2>
  </div>
);
