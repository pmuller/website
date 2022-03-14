import { styled } from "linaria/react";

import { ExternalLink } from "../../links";

export const ContactMethodAnchor = styled(ExternalLink)`
  /* iPhone SE landscape and bigger */
  @media (min-width: 568px) {
    flex-direction: row-reverse;
  }
`;
