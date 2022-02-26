import { PageProps } from "gatsby";
import React from "react";

import {
  FullName,
  Introduction,
  Layout,
  SocialNetworkSection,
} from "../components";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <FullName />
    <Introduction />
    <SocialNetworkSection />
  </Layout>
);

export default IndexPage;
