import { AnchorHTMLAttributes, ReactChild } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactChild;
};
