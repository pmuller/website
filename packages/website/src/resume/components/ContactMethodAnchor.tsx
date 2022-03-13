import { styled } from "linaria/react";

import { ExternalLink } from "../../links";

export const ContactMethodAnchor = styled(ExternalLink)`
  flex-direction: row-reverse;

  & > .label {
    display: none;
  }

  /* iPhone SE landscape and bigger */
  @media (min-width: 568px) {
    & > .label {
      display: block;
      align-self: center;
    }
  }
`;
