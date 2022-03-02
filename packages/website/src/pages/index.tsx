import { PageProps } from "gatsby";
import React from "react";

import { Layout } from "../core";
import { Introduction } from "./Index";

const Index: React.FC<PageProps> = () => (
  <Layout>
    <Introduction />
  </Layout>
);

export default Index;
