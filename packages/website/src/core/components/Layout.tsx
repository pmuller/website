import React from "react";

import { BasePage } from "./BasePage";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = ({ children }) => (
  <BasePage>
    <Header />
    {children}
    <Footer />
  </BasePage>
);
