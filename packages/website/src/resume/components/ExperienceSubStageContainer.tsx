import { styled } from "linaria/react";

export const ExperienceSubStageContainer = styled.div`
  & > .header {
    display: flex;

    & > .title {
      font-weight: bold;
    }

    & > .dates {
      flex-grow: 1;
      text-align: right;
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
