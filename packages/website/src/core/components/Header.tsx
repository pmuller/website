import React from "react";

import { Avatar } from "./Avatar";
import { container } from "./Header.module.css";
import { SocialNetworkSection } from "./SocialNetworkSection";
import { Title } from "./Title";

export const Header: React.FC = () => (
  <header className={container}>
    <Avatar />
    <Title />
    <SocialNetworkSection />
  </header>
);
