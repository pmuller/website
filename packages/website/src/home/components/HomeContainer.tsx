import { styled } from "linaria/react";

export const HomeContainer = styled.div`
  font-family: monospace;
  font-size: x-large;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  & h2 {
    margin: 0 0 0.83rem 0;
    @media (min-width: 600px) {
      margin: 0.83rem 0;
    }
  }
`;
