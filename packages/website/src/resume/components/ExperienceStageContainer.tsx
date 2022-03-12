import { styled } from "linaria/react";

export const ExperienceStageContainer = styled.div`
  margin-bottom: 1rem;

  & > .title {
    font-weight: bold;
  }

  & > .company {
    display: flex;
    gap: 0.25rem;

    & > .name {
      color: #2471a3;
      font-weight: bold;
    }
  }

  & > .description {
    margin: 0.5rem 1rem;

    & ul {
      margin: 0;
      padding-left: 0.9rem;

      & > li {
        list-style-type: circle;
      }
    }
  }
`;
