import { styled } from "linaria/react";

import { ExternalLink } from "../../core";

// XXX: De-dupplicate these anchors style with the global ones
export const CompanyNameAnchor = styled(ExternalLink)`
  &,
  &:visited {
    color: #2471a3;
    font-weight: bold;
  }
`;
