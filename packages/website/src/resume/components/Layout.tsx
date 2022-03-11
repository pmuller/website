import { styled } from "linaria/react";

export const Layout = styled.div`
  margin: 0.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 4fr 1fr;
  grid-template-areas:
    "identity   contact"
    "summary    summary"
    "experience experience"
    "education  education";

  /* iPhone SE landscape and bigger */
  @media (min-width: 568px) {
    grid-template-areas:
      "identity   contact"
      "experience summary"
      "experience education"
      "experience .";
  }
`;
