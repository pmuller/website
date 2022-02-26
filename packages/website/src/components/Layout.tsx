import React from "react";

import { container } from "./Layout.module.css";

export const Layout: React.FC = ({ children }) => (
  <div className={container}>{children}</div>
);
