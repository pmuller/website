import { formatDate } from "./formatDate";

export const formatEndDate = (date?: Date) =>
  date ? formatDate(date) : "current";
