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

  & > .dates,
  & > .location {
    display: inline;
  }

  & > .description {
    margin-top: 0.5rem;
  }
`;
