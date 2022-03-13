import { styled } from "linaria/react";

import { ExternalLink } from "../../links";

export const OrganizationNameAnchor = styled(ExternalLink)`
  &,
  &:visited {
    color: var(--color-primary);
    font-weight: bold;
  }
`;
