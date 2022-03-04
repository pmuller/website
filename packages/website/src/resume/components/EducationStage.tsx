import React from "react";

import { EducationStage as Props } from "../types";

export const EducationStage: React.FC<Props> = (props) => (
  <div>
    <div>School: {props.school.name}</div>
    <div>Start: {props.startDate.toISOString()}</div>
    <div>End: {props.endDate?.toISOString()}</div>
    <div>Degree: {props.degree}</div>
    <div>Description: {props.description}</div>
  </div>
);
