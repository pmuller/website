import React from "react";

import { GitHubIcon, LinkedInIcon, TwitterIcon } from "../../icons";
import { container } from "./SocialNetworkSection.module.css";

export const SocialNetworkSection: React.FC = () => (
  <section className={container}>
    <GitHubIcon />
    <LinkedInIcon />
    <TwitterIcon />
  </section>
);
