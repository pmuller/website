import React from "react";

import { container } from "./Header.module.css";
import { SocialNetworkSection } from "./SocialNetworkSection";
import { Title } from "./Title";

export const Header: React.FC = () => (
  <header className={container}>
    <Title />
    <SocialNetworkSection />
  </header>
);
