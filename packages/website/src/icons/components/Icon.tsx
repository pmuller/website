import React from "react";

import { container } from "./Icon.module.css";

type Props = {
  name: string;
  url: string;
  path: string;
};

export const Icon: React.FC<Props> = ({ name, path, url }) => (
  <a target="_blank" rel="noopener" href={url}>
    <img className={container} src={path} alt={name} />
  </a>
);
