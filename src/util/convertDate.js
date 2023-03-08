function convertToWIB(utcTimestamp) {
  // create a new Date object using the UTC timestamp
  const utcDate = new Date(utcTimestamp);

  // add 7 hours to the UTC time to convert to WIB time
  const wibDate = new Date(utcDate.getTime() + 7 * 60 * 60 * 1000);

  // format the date string in WIB format, without hours
  const formattedDate = wibDate.toLocaleDateString("en-ID", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDate;
}

export default convertToWIB;
