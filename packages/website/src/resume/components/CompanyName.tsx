import React from "react";

import { Organization as Props } from "../types";
import { CompanyNameAnchor } from "./CompanyNameAnchor";
import { CompanyNameContainer } from "./CompanyNameContainer";

export const CompanyName: React.FC<Props> = ({ name, url }) =>
  url ? (
    <CompanyNameAnchor as="a" rel="noopener" target="_blank" href={url}>
      {name}
    </CompanyNameAnchor>
  ) : (
    <CompanyNameContainer>{name}</CompanyNameContainer>
  );
