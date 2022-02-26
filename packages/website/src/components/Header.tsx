import React from "react";

import { FullName } from "./FullName";
import { container } from "./Header.module.css";
import { SocialNetworkSection } from "./SocialNetworkSection";

export const Header: React.FC = () => (
  <header className={container}>
    <FullName />
    <SocialNetworkSection />
  </header>
);
