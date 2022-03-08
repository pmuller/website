import React from "react";

import { Contact } from "./Contact";
import { Identity } from "./Identity";

export const Header: React.FC = () => (
  <header style={{ display: "flex" }}>
    <Identity />
    <Contact />
  </header>
);
