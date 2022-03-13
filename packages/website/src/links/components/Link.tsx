import React, { FC } from "react";

import { LinkProps } from "../types";
import { Anchor } from "./Anchor";

export const Link: FC<LinkProps> = ({ icon, children, ...props }) => (
  <Anchor {...props}>
    {icon}
    {children && <span className="label">{children}</span>}
  </Anchor>
);
