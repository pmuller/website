import { styled } from "linaria/react";

export const IdentityContainer = styled.h1`
  flex-grow: 1;

  & > .jobTitle {
    color: var(--color-primary);
    font-size: smaller;
  }
`;
