import React from "react";

import { container } from "./Footer.module.css";

export const Footer: React.FC = () => (
  <footer className={container}>
    © {new Date().getFullYear()} Philippe Muller - Clone on{" "}
    <a rel="noopener" target="_blank" href="https://github.com/pmuller/website">
      GitHub
    </a>
  </footer>
);
