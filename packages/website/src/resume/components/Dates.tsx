import React from "react";

import { formatDate, formatEndDate } from "../helpers";

type Props = {
  start: Date;
  end?: Date;
};

export const Dates: React.FC<Props> = ({ start, end }) => (
  <div className="dates">
    {formatDate(start)} - {formatEndDate(end)}
  </div>
);
