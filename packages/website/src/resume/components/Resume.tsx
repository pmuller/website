import React from "react";

import { LayoutContainer } from "../../core";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <LayoutContainer>
    <Layout>
      <Header />
      <Summary />
      <Experience />
      <Education />
    </Layout>
  </LayoutContainer>
);
