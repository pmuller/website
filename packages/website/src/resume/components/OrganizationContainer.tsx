import { styled } from "linaria/react";

export const OrganizationContainer = styled.div`
  display: grid;
  gap: 0.2rem;
  margin-bottom: 0.5rem;
  grid-template-areas:
    "name        location"
    "description description";
`;
