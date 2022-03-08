import React from "react";

import { Avatar } from "./Avatar";
import { HeaderContainer } from "./HeaderContainer";
import { SocialNetworkSection } from "./SocialNetworkSection";
import { Title } from "./Title";

export const Header: React.FC = () => (
  <HeaderContainer>
    <Avatar />
    <Title />
    <SocialNetworkSection />
  </HeaderContainer>
);
