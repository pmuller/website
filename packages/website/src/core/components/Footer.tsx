import React from "react";

import { FooterContainer } from "./FooterContainer";

export const Footer: React.FC = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Philippe Muller - Clone on{" "}
    <a rel="noopener" target="_blank" href="https://github.com/pmuller/website">
      GitHub
    </a>
  </FooterContainer>
);
