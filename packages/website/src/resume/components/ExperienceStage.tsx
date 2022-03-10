import React from "react";

import { ExperienceStage as Props } from "../types";
import { ExperienceStageContainer } from "./ExperienceStageContainer";
import { ExperienceStageDates } from "./ExperienceStageDates";

export const ExperienceStage: React.FC<Props> = (props) => (
  <ExperienceStageContainer>
    <div className="title">{props.title}</div>
    <div className="company">
      <div className="name">{props.company.name}</div>
      <div className="location">({props.location})</div>
    </div>
    <ExperienceStageDates start={props.startDate} end={props.endDate} />
    <div className="description">{props.description}</div>
  </ExperienceStageContainer>
);
