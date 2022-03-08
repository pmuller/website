import React from "react";

import { GitHubIcon, LinkedInIcon, TwitterIcon } from "../../icons";
import { SocialNetworkIconContainer } from "./SocialNetworkIconContainer";

export const SocialNetworkSection: React.FC = () => (
  <SocialNetworkIconContainer>
    <GitHubIcon />
    <LinkedInIcon />
    <TwitterIcon />
  </SocialNetworkIconContainer>
);
