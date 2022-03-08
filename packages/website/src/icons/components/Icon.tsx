import React from "react";

import { IconImage } from "./IconImage";

type Props = {
  name: string;
  url: string;
  path: string;
};

export const Icon: React.FC<Props> = ({ name, path, url }) => (
  <a target="_blank" rel="noopener" href={url}>
    <IconImage src={path} alt={name} />
  </a>
);
