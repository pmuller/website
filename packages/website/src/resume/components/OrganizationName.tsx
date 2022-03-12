import React from "react";

import { Organization as Props } from "../types";
import { OrganizationNameAnchor } from "./OrganizationNameAnchor";
import { OrganizationNameContainer } from "./OrganizationNameContainer";

export const OrganizationName: React.FC<Props> = ({ name, url }) =>
  url ? (
    <OrganizationNameAnchor href={url}>{name}</OrganizationNameAnchor>
  ) : (
    <OrganizationNameContainer>{name}</OrganizationNameContainer>
  );
