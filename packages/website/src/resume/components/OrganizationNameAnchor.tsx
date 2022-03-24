import { styled } from "linaria/react";

import { ExternalLink } from "../../links";

export const OrganizationNameAnchor = styled(ExternalLink)`
  grid-area: name;
  font-weight: bold;

  &,
  &:visited {
    color: var(--color-primary);
  }
`;
