import React, { AnchorHTMLAttributes, FC } from "react";

import { Link } from "./Link";

export const ExternalLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => <Link rel="noopener" target="_blank" {...props} />;
