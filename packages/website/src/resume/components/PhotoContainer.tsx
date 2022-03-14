import { styled } from "linaria/react";

export const PhotoContainer = styled.img`
  border-radius: 50%;
  border: solid 3px var(--color-primary);
  width: 80px;
  height: 80px;

  @media (min-width: 480px) {
    width: auto;
  }
`;
