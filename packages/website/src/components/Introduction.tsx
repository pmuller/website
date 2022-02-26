import React from "react";

import { container } from "./Introduction.module.css";

export const Introduction: React.FC = () => (
  <section className={container}>
    <p>Hi, I'm Philippe Muller.</p>
    <p>I am a software engineer and I am fond of infrastructure automation.</p>
    <p>
      I am currently building awesome team building games at{" "}
      <a target="_blank" rel="noopener" href="https://happyteams.events/en">
        Happy Teams
      </a>
      .
    </p>
  </section>
);
