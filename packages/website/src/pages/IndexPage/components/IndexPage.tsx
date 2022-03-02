import { PageProps } from "gatsby";
import React from "react";

import { Header, Layout } from "../../../core";
import { Introduction } from "./Introduction";

export const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <Introduction />
  </Layout>
);
