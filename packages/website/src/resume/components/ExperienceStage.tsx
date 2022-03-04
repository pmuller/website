import React from "react";

import { ExperienceStage as Props } from "../types";

export const ExperienceStage: React.FC<Props> = (props) => (
  <div>
    <div>Title: {props.title}</div>
    <div>Start: {props.startDate.toISOString()}</div>
    <div>End: {props.endDate?.toISOString()}</div>
    <div>Location: {props.location}</div>
    <div>Company: {props.company.name}</div>
    <div>Description: {props.description}</div>
  </div>
);
