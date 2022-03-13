import { styled } from "linaria/react";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    border-bottom: solid 3px #000;
    text-transform: uppercase;
    margin: 0;
  }
`;
