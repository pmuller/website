import React from "react";

import { BasePage } from "../../core";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <BasePage>
    <Layout>
      <Header />
      <Summary />
      <Experience />
      <Education />
    </Layout>
  </BasePage>
);
