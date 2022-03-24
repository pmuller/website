import React from "react";

import { BasePage } from "./BasePage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageMetadata } from "./PageMetadata";

export const Layout: React.FC = ({ children }) => (
  <BasePage>
    <PageMetadata />
    <Header />
    {children}
    <Footer />
  </BasePage>
);
