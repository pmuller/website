import { styled } from "linaria/react";

export const NavLink = styled.a`
  font-family: monospace;
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 0.2rem;
  }
`;
