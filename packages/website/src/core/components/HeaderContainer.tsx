import { styled } from "linaria/react";

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;
  padding: 0.45rem;

  &,
  & > a {
    display: flex;
    gap: 1rem;
  }
`;
