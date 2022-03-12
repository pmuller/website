import { styled } from "linaria/react";

import { ExternalLink } from "../../core";

export const OrganizationNameAnchor = styled(ExternalLink)`
  &,
  &:visited {
    color: var(--color-primary);
    font-weight: bold;
  }
`;
