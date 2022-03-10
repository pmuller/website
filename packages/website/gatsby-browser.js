/* eslint-disable import/no-unused-modules,no-unused-expressions */
import { css } from "linaria";

css`
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :global() {
    body {
      margin: 0;
    }

    a,
    a:visited {
      color: #666;
      text-underline-offset: 0.1rem;
      text-decoration-style: dotted;
    }

    a:hover {
      color: #000;
      text-decoration: none;
    }
  }
`;
