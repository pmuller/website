import { styled } from "linaria/react";

import { OrganizationContainer } from "./OrganizationContainer";

export const EducationStageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > .degree {
    font-size: medium;
    font-weight: bold;
  }

  & > ${OrganizationContainer} {
    gap: 0.25rem;
    margin-bottom: 0;
  }
`;
