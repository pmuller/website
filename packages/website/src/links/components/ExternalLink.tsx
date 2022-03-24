import React, { FC } from "react";

import { LinkProps } from "../types";
import { Link } from "./Link";

export const ExternalLink: FC<LinkProps> = (props) => (
  <Link rel="noopener" target="_blank" {...props} />
);
