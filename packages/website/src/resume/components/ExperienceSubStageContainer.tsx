import { styled } from "linaria/react";

export const ExperienceSubStageContainer = styled.div`
  & > .header {
    display: flex;
    flex-direction: column;

    & > .title {
      font-weight: bold;
    }

    /* iPhone SE landscape and bigger */
    @media (min-width: 568px) {
      flex-direction: row;

      & > .title {
        flex-grow: 1;
      }
    }
  }

  & > .body {
    margin: 0.5rem 0 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > .description {
      & ul {
        margin: 0;
        padding-left: 0.9rem;

        & > li {
          list-style-type: circle;
        }
      }
    }
  }
`;
