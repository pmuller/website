import { styled } from "linaria/react";

export const Layout = styled.div`
  margin: 0.5rem 0.5rem 3rem 0.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 4fr 1fr;
  grid-template-areas:
    "header     header"
    "summary    summary"
    "experience experience"
    "languages  languages"
    "education  education";

  /* iPhone SE landscape and bigger */
  @media (min-width: 568px) {
    grid-template-areas:
      "header     header"
      "experience summary"
      "experience languages"
      "experience education"
      "experience .";
  }
`;
