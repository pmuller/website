import React from "react";

import { identity } from "../data";
import { container } from "./Identity.module.css";

export const Identity: React.FC = () => (
  <div className={container}>
    <h1>
      {identity.firstName} {identity.lastName}
    </h1>
    <h2>{identity.jobTitle}</h2>
  </div>
);
