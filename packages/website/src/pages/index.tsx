import { PageProps } from "gatsby";
import React from "react";

import { Header, Introduction } from "../components";

const IndexPage: React.FC<PageProps> = () => (
  <main>
    <Header />
    <Introduction />
  </main>
);

export default IndexPage;
