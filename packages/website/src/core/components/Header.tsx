import React from "react";

import { Avatar } from "./Avatar";
import { HeaderContainer } from "./HeaderContainer";
import { NavLink } from "./NavLink";
import { Title } from "./Title";

export const Header: React.FC = () => (
  <HeaderContainer>
    <NavLink href="/">
      <Avatar />
      <Title />
    </NavLink>
  </HeaderContainer>
);
