import { styled } from "linaria/react";

export const ExperienceStageContainer = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;

  & > .company {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }

  & > .subStages {
    margin-left: 0.5rem;
  }
`;
