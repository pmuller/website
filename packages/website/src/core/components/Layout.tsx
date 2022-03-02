import React from "react";

import { Header } from "./Header";
import { container } from "./Layout.module.css";

export const Layout: React.FC = ({ children }) => (
  <main className={container}>
    <Header />
    {children}
  </main>
);
