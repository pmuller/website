export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long" }).format(
    date
  );
