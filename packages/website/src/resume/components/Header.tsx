import React from "react";

import { Avatar } from "../../avatar";
import { Contact } from "./Contact";
import { HeaderContainer } from "./HeaderContainer";
import { Identity } from "./Identity";

export const Header: React.FC = () => (
  <HeaderContainer>
    <Avatar />
    <Identity />
    <Contact />
  </HeaderContainer>
);
