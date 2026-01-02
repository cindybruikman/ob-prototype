export function formatDutchDate(
  isoDate: string,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
): string {
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("nl-NL", options).format(date);
}
