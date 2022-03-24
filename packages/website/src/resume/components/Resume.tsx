import React from "react";
import { Helmet } from "react-helmet";

import { BasePage, PageMetadata } from "../../core";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Languages } from "./Languages";
import { Layout } from "./Layout";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <BasePage>
    <PageMetadata />
    <Helmet title="Philippe Muller Software Engineer resume" />
    <Layout>
      <Header />
      <Experience />
      <Summary />
      <Languages />
      <Education />
    </Layout>
  </BasePage>
);
