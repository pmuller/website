import React from "react";

import { ExperienceStage as Props } from "../types";
import { ExperienceStageContainer } from "./ExperienceStageContainer";
import { ExperienceStageDates } from "./ExperienceStageDates";

export const ExperienceStage: React.FC<Props> = (props) => (
  <ExperienceStageContainer>
    <div className="company">
      <div className="name">{props.company.name}</div>
      <div className="location">({props.location})</div>
    </div>
    <div className="title">{props.title}</div>
    <ExperienceStageDates start={props.startDate} end={props.endDate} />
    <div className="body">
      <div className="description">{props.description}</div>
      <div className="stack">Stack: {props.techStack?.join(", ")}</div>
    </div>
  </ExperienceStageContainer>
);
