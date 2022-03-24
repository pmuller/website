import React from "react";

import { Link } from "../../links";
import { IntroductionContainer } from "./IntroductionContainer";

export const Introduction: React.FC = () => (
  <IntroductionContainer>
    <h2>
      Hi, my name is <strong>Philippe Muller</strong>
    </h2>
    <p>
      <Link href="/resume/">Over the last 20 years</Link>, I've built numerous
      infrastructures. First, as a systems engineer, then as a software engineer
      then as CTO.
    </p>
    <p>
      I love building software systems at scale. I have a particular expertise
      building serverless applications on AWS with TypeScript and Pulumi.
    </p>
    <p>
      Internet people taught me a lot and I am always happy to help. Feel free
      to contact me if you'd like to discuss your projects.
    </p>
  </IntroductionContainer>
);
