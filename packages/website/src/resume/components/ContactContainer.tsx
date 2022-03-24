import { styled } from "linaria/react";

export const ContactContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: flex-end;
  align-self: flex-start;

  /* iPhone SE landscape and bigger */
  @media (min-width: 568px) {
    flex-direction: column;

    & > a {
      flex-direction: row-reverse;
    }
  }
`;
