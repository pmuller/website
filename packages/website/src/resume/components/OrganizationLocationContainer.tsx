import { styled } from "linaria/react";

export const OrganizationLocationContainer = styled.span`
  grid-area: location;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  height: fit-content;
  gap: 0.2rem;

  & > svg {
    align-self: center;
  }
`;
