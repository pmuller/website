import { PageProps } from "gatsby";
import React from "react";

import { FullName, Introduction } from "../components";
import { socialNetworkIcon } from "./index.module.css";

const IndexPage: React.FC<PageProps> = () => (
  <main>
    <FullName />
    <Introduction />
    <section>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/muller/"
      >
        <img
          className={socialNetworkIcon}
          src="/icons/linkedin.svg"
          alt="LinkedIn"
        />
      </a>
      <a target="_blank" rel="noopener" href="https://github.com/pmuller">
        <img
          className={socialNetworkIcon}
          src="/icons/github.svg"
          alt="GitHub"
        />
      </a>
      <a target="_blank" rel="noopener" href="https://twitter.com/pmuller42">
        <img
          className={socialNetworkIcon}
          src="/icons/twitter.svg"
          alt="Twitter"
        />
      </a>
    </section>
  </main>
);

export default IndexPage;
