import React from "react";

import { identity } from "../data";
import { IdentityContainer } from "./IdentityContainer";

export const Identity: React.FC = () => (
  <IdentityContainer>
    <h1>
      {identity.firstName} {identity.lastName}
    </h1>
    <h2>{identity.jobTitle}</h2>
  </IdentityContainer>
);
