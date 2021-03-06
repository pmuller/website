import React from "react";

import { ExperienceSubStage as Props } from "../types";
import { Dates } from "./Dates";
import { ExperienceSubStageContainer } from "./ExperienceSubStageContainer";

export const ExperienceSubStage: React.FC<Props> = (props) => (
  <ExperienceSubStageContainer>
    <div className="header">
      <div className="title">{props.title}</div>
      <Dates start={props.startDate} end={props.endDate} />
    </div>
    <div className="body">
      <div className="description">{props.description}</div>
      <div className="stack">Stack: {props.techStack?.join(", ")}</div>
    </div>
  </ExperienceSubStageContainer>
);
