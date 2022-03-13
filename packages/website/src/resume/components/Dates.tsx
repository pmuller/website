import { mdiCalendarMonthOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

import { formatDate, formatEndDate } from "../helpers";
import { DatesContainer } from "./DatesContainer";

type Props = {
  start: Date;
  end?: Date;
};

export const Dates: React.FC<Props> = ({ start, end }) => (
  <DatesContainer>
    <Icon path={mdiCalendarMonthOutline} size={0.7} />
    {formatDate(start)} - {formatEndDate(end)}
  </DatesContainer>
);
