import { styled } from "linaria/react";

import { OrganizationContainer } from "./OrganizationContainer";
import { OrganizationLocationContainer } from "./OrganizationLocationContainer";

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
    display: flex;
    flex-direction: column;

    & > ${OrganizationLocationContainer} {
      justify-content: flex-start;
    }
  }
`;
