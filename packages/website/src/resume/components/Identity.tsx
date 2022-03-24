import React from "react";

import { identity } from "../data";
import { IdentityContainer } from "./IdentityContainer";

export const Identity: React.FC = () => (
  <IdentityContainer>
    <div className="fullName">
      {identity.firstName} {identity.lastName}
    </div>
    <div className="jobTitle">{identity.jobTitle}</div>
  </IdentityContainer>
);
