export function formatDate({dateString} : {dateString: string})
{
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return formattedDate;
}