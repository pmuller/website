import { styled } from "linaria/react";

export const IntroductionContainer = styled.div`
  font-family: monospace;
  font-size: x-large;
  margin: 1rem;
  color: #222;

  & strong {
    color: #000;
  }

  & > p {
    line-height: 1.75rem;
  }
`;
