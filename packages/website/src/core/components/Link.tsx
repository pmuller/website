import { styled } from "linaria/react";

export const Link = styled.a`
  &,
  &:visited {
    color: #666;
    text-underline-offset: 0.1rem;
    text-decoration-style: dotted;
  }

  &:hover {
    color: #000;
    text-decoration: none;
  }
`;
