import { PageProps } from "gatsby";
import React from "react";

import { socialNetworkIcon } from "./index.module.css";

const IndexPage: React.FC<PageProps> = () => (
  <main>
    <h1>Philippe Muller</h1>
    <section>
      <div>Hi, I'm Philippe.</div>
      <div>
        I am a software engineer and I am fond of infrastructure automation.
      </div>
      <div>
        I am currently building awesome team building games at{" "}
        <a target="_blank" rel="noopener" href="https://happyteams.events/en">
          Happy Teams
        </a>
        .
      </div>
    </section>
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
