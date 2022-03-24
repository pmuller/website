import { styled } from "linaria/react";

import { Section } from "./Section";

export const SummaryContainer = styled(Section)`
  grid-area: summary;

  & > p {
    margin: 0;
  }
`;
