import React from "react";

import { Layout } from "../../core";
import { HomeContainer } from "./HomeContainer";

export const HomeLayout: React.FC = ({ children }) => (
  <Layout>
    <HomeContainer>{children}</HomeContainer>
  </Layout>
);
