import React from "react";

import { Organization as Props } from "../types";
import { OrganizationContainer } from "./OrganizationContainer";
import { OrganizationName } from "./OrganizationName";

export const Organization: React.FC<Props> = ({ name, url, location }) => (
  <OrganizationContainer>
    <OrganizationName name={name} url={url} />
    {location && <div className="location">({location})</div>}
  </OrganizationContainer>
);
