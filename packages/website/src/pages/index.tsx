import { PageProps } from "gatsby";
import React from "react";

import { FullName, Introduction, SocialNetworkSection } from "../components";

const IndexPage: React.FC<PageProps> = () => (
  <main>
    <FullName />
    <Introduction />
    <SocialNetworkSection />
  </main>
);

export default IndexPage;
