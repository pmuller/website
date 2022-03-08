import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutContainer } from "./LayoutContainer";

export const Layout: React.FC = ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
    <Footer />
  </LayoutContainer>
);
