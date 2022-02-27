import { PageProps } from "gatsby";
import React from "react";

import { Header, Introduction, Layout } from "../components";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <Introduction />
  </Layout>
);

export default IndexPage;
