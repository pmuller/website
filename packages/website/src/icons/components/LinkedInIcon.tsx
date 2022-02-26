import React from "react";

// eslint-disable-next-line import/no-internal-modules
import LinkedInSvg from "../assets/LinkedIn.svg";
import { Icon } from "./Icon";

export const LinkedInIcon: React.FC = () => (
  <Icon
    name="LinkedIn"
    url="https://www.linkedin.com/in/muller/"
    path={LinkedInSvg}
  />
);
