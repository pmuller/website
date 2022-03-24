import { styled } from "linaria/react";

import { Section } from "./Section";

export const LanguagesContainer = styled(Section)`
  grid-area: languages;

  & > ul {
    margin: 0;
    padding: 0 0 0 1rem;
  }
`;
