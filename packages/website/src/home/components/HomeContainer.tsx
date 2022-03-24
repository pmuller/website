import { styled } from "linaria/react";

export const HomeContainer = styled.div`
  font-family: monospace;
  font-size: x-large;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;
