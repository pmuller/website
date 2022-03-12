import React from "react";

import { ExternalLink } from "../../core";
import { IconImage } from "./IconImage";

type Props = {
  name: string;
  url: string;
  path: string;
};

export const Icon: React.FC<Props> = ({ name, path, url }) => (
  <ExternalLink href={url}>
    <IconImage src={path} alt={name} />
  </ExternalLink>
);
