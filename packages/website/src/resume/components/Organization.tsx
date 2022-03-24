import React from "react";

import { Organization as Props } from "../types";
import { OrganizationContainer } from "./OrganizationContainer";
import { OrganizationDescription } from "./OrganizationDescription";
import { OrganizationLocation } from "./OrganizationLocation";
import { OrganizationName } from "./OrganizationName";

export const Organization: React.FC<Props> = ({
  name,
  url,
  location,
  description,
}) => (
  <OrganizationContainer>
    <OrganizationName name={name} url={url} />
    {description && (
      <OrganizationDescription>{description}</OrganizationDescription>
    )}
    {location && <OrganizationLocation label={location} />}
  </OrganizationContainer>
);
