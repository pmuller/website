import React from "react";

import { ExternalLink } from "../../links";
import { IntroductionContainer } from "./IntroductionContainer";

export const Introduction: React.FC = () => (
  <IntroductionContainer>
    <h2>
      Hi, my name is <strong>Philippe Muller</strong>
    </h2>
    <p>
      I am a <strong>software engineer</strong> and I am fond of{" "}
      <strong>infrastructure automation</strong>.
    </p>
    <p>
      I am currently building awesome team building games at{" "}
      <ExternalLink href="https://happyteams.events/en">
        Happy Teams
      </ExternalLink>
      . If you are part of a remote team and enjoy escape rooms, you should
      check out our latest game:{" "}
      <ExternalLink href="https://www.happyteams.events/en/the-diamond-heist">
        The Diamond Heist
      </ExternalLink>
      .
    </p>
    <p>
      Previously, I worked in tech companies and in systematic hedge funds, both
      as an individual contributor and as CTO.
    </p>
  </IntroductionContainer>
);
