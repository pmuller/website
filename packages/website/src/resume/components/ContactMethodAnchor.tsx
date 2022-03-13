import { styled } from "linaria/react";

import { ExternalLink } from "../../links";

export const ContactMethodAnchor = styled(ExternalLink)`
  display: flex;
  gap: 0.25rem;

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
