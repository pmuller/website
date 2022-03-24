import React from "react";

import { Contact } from "./Contact";
import { HeaderContainer } from "./HeaderContainer";
import { Identity } from "./Identity";
import { Photo } from "./Photo";

export const Header: React.FC = () => (
  <HeaderContainer>
    <Photo />
    <Identity />
    <Contact />
  </HeaderContainer>
);
