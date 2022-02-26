import React from "react";

// eslint-disable-next-line import/no-internal-modules
import GitHubSvg from "../assets/GitHub.svg";
import { Icon } from "./Icon";

export const GitHubIcon: React.FC = () => (
  <Icon name="GitHub" url="https://github.com/pmuller" path={GitHubSvg} />
);
