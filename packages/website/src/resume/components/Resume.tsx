import React from "react";

import { BasePage } from "../../core";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Languages } from "./Languages";
import { Layout } from "./Layout";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <BasePage>
    <Layout>
      <Header />
      <Experience />
      <Summary />
      <Languages />
      <Education />
    </Layout>
  </BasePage>
);
