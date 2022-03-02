import React from "react";

import { Avatar } from "./Avatar";
import * as styles from "./Header.module.css";
import { SocialNetworkSection } from "./SocialNetworkSection";
import { Title } from "./Title";

export const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <Avatar />
      <Title />
      <SocialNetworkSection />
    </div>
  </header>
);
