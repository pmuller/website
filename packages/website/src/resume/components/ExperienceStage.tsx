import React from "react";

import { ExperienceStage as Props } from "../types";
import { ExperienceStageContainer } from "./ExperienceStageContainer";
import { ExperienceSubStage } from "./ExperienceSubStage";

export const ExperienceStage: React.FC<Props> = (props) => (
  <ExperienceStageContainer>
    <div className="company">
      <div className="name">{props.company.name}</div>
      <div className="location">({props.location})</div>
    </div>
    <div className="subStages">
      {props.stages.map((stage, index) => (
        <ExperienceSubStage key={index} {...stage} />
      ))}
    </div>
  </ExperienceStageContainer>
);
