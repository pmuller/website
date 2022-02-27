import React from "react";

import { container } from "./Introduction.module.css";

export const Introduction: React.FC = () => (
  <section className={container}>
    <p>
      Hi, my name is <strong>Philippe Muller</strong>.
    </p>
    <p>
      I am a <strong>software engineer</strong> and I am fond of{" "}
      <strong>infrastructure automation</strong>.
    </p>
    <p>
      I am currently building awesome team building games at{" "}
      <a target="_blank" rel="noopener" href="https://happyteams.events/en">
        Happy Teams
      </a>
      . If you are part of a remote team and enjoy escape rooms, you should
      check out our latest game:{" "}
      <a
        target="_blank"
        rel="noopener"
        href="https://www.happyteams.events/en/the-diamond-heist"
      >
        The Diamond Heist
      </a>
      .
    </p>
    <p>
      Previously, I worked in tech companies and in systematic hedge funds, both
      as an individual contributor and as CTO.
    </p>
  </section>
);
