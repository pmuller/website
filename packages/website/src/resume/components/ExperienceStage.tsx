import React from "react";

import { ExperienceStage as Props } from "../types";
import { ExperienceStageContainer } from "./ExperienceStageContainer";
import { ExperienceSubStage } from "./ExperienceSubStage";
import { Organization } from "./Organization";

export const ExperienceStage: React.FC<Props> = (props) => (
  <ExperienceStageContainer>
    <Organization {...props.company} />
    <div className="subStages">
      {props.stages.map((stage, index) => (
        <ExperienceSubStage key={index} {...stage} />
      ))}
    </div>
  </ExperienceStageContainer>
);
