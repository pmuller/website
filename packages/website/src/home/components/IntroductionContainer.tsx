import { styled } from "linaria/react";

export const IntroductionContainer = styled.div`
  color: #222;

  & strong {
    color: #000;
  }

  & > h2 {
    font-weight: normal;
  }

  & > p {
    line-height: 1.75rem;
  }
`;
