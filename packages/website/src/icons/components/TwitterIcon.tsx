import React from "react";

// eslint-disable-next-line import/no-internal-modules
import TwitterSvg from "../assets/Twitter.svg";
import { Icon } from "./Icon";

export const TwitterIcon: React.FC = () => (
  <Icon name="Twitter" path={TwitterSvg} url="https://twitter.com/pmuller42" />
);
