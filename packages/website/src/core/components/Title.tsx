import React from "react";

import { useSiteDomain } from "../hooks";
import { TitleContainer } from "./TitleContainer";

export const Title: React.FC = () => (
  <TitleContainer>{useSiteDomain()}</TitleContainer>
);
