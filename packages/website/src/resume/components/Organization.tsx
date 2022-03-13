import React from "react";

import { Organization as Props } from "../types";
import { OrganizationContainer } from "./OrganizationContainer";
import { OrganizationLocation } from "./OrganizationLocation";
import { OrganizationName } from "./OrganizationName";

export const Organization: React.FC<Props> = ({ name, url, location }) => (
  <OrganizationContainer>
    <OrganizationName name={name} url={url} />
    {location && <OrganizationLocation label={location} />}
  </OrganizationContainer>
);
