import React from "react";

import { container } from "./Layout.module.css";

export const Layout: React.FC = ({ children }) => (
  <main className={container}>{children}</main>
);
