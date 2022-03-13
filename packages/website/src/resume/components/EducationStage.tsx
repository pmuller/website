import React from "react";

import { EducationStage as Props } from "../types";
import { Dates } from "./Dates";
import { EducationStageContainer } from "./EducationStageContainer";
import { Organization } from "./Organization";

export const EducationStage: React.FC<Props> = (props) => (
  <EducationStageContainer>
    {props.degree && <div className="degree">{props.degree}</div>}
    <Organization {...props.school} />
    <Dates start={props.startDate} end={props.endDate} />
    <div>{props.description}</div>
  </EducationStageContainer>
);
