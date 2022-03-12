import React from "react";

import { ExternalLink } from "./ExternalLink";
import { FooterContainer } from "./FooterContainer";

export const Footer: React.FC = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Philippe Muller - Fork on{" "}
    <ExternalLink href="https://github.com/pmuller/website">
      GitHub
    </ExternalLink>
  </FooterContainer>
);
