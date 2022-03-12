import { styled } from "linaria/react";

export const ContactMethodAnchor = styled.a`
  display: flex;
  gap: 0.25rem;

  & > .label {
    display: none;
  }

  /* iPhone SE landscape and bigger */
  @media (min-width: 568px) {
    & > .label {
      display: block;
    }
  }
`;
