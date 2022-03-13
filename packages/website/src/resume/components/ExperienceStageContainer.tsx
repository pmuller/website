import { styled } from "linaria/react";

export const ExperienceStageContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > .subStages {
    margin-left: 0.5rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }
`;
