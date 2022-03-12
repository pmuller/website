import React from "react";

import { ExperienceStage as Props } from "../types";
import { CompanyName } from "./CompanyName";
import { ExperienceStageContainer } from "./ExperienceStageContainer";
import { ExperienceSubStage } from "./ExperienceSubStage";

export const ExperienceStage: React.FC<Props> = (props) => (
  <ExperienceStageContainer>
    <div className="company">
      <CompanyName {...props.company} />
      <div className="location">({props.location})</div>
    </div>
    <div className="subStages">
      {props.stages.map((stage, index) => (
        <ExperienceSubStage key={index} {...stage} />
      ))}
    </div>
  </ExperienceStageContainer>
);
