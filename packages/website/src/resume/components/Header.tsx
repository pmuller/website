import React from "react";

import { Contact } from "./Contact";
import { container } from "./Header.module.css";
import { Identity } from "./Identity";

export const Header: React.FC = () => (
  <header className={container}>
    <Identity />
    <Contact />
  </header>
);
