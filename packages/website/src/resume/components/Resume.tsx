import React from "react";

import { BasePage } from "../../core";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Identity } from "./Identity";
import { Layout } from "./Layout";
import { Summary } from "./Summary";

export const Resume: React.FC = () => (
  <BasePage>
    <Layout>
      <Identity />
      <Contact />
      <Experience />
      <Summary />
      <Education />
    </Layout>
  </BasePage>
);
