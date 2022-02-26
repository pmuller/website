import React from "react";

import { container } from "./Introduction.module.css";

export const Introduction: React.FC = () => (
  <section className={container}>
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
);
