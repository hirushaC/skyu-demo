import { format } from "date-fns-tz";

const dateFormat = (dateString) => {
  const date = new Date(dateString);
  return format(date, "dd MMM yyyy", { timeZone: "America/New_York" });
};

export default dateFormat;
