import { styled } from "linaria/react";

export const Anchor = styled.a`
  &,
  &:visited {
    color: #666;
    text-underline-offset: 0.1rem;
    text-decoration-style: dotted;
    display: inline-flex;
    gap: 0.1rem;
  }

  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;
