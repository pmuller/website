import React from "react";

import { Link } from "../../links";
import { IntroductionContainer } from "./IntroductionContainer";

export const Introduction: React.FC = () => (
  <IntroductionContainer>
    <p>
      Hi, my name is <strong>Philippe Muller</strong>.
    </p>
    <p>
      I love <Link href="/resume/">building software systems at scale</Link>.
      Nowadays I write serverless apps using TypeScript with React on the
      frontend and Pulumi to deploy the AWS backend.
    </p>
    <p>
      Internet people taught me a lot and I am always happy to help. Feel free
      to contact me if you'd like to discuss your projects.
    </p>
  </IntroductionContainer>
);
