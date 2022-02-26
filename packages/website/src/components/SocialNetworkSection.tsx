import React from "react";

import { SocialNetworkIcon } from "./SocialNetworkIcon";
import { container } from "./SocialNetworkSection.module.css";

export const SocialNetworkSection: React.FC = () => (
  <section className={container}>
    <SocialNetworkIcon
      name="LinkedIn"
      url="https://www.linkedin.com/in/muller/"
    />
    <SocialNetworkIcon name="GitHub" url="https://github.com/pmuller" />
    <SocialNetworkIcon name="Twitter" url="https://twitter.com/pmuller42" />
  </section>
);
