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
    </p>
  </IntroductionContainer>
);
