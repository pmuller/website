import { styled } from "linaria/react";

export const Link = styled.a`
  &,
  &:visited {
    color: #666;
    text-underline-offset: 0.1rem;
    text-decoration-style: dotted;
  }

  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;
