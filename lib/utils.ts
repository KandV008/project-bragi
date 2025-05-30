/**
 * Formats a given date input into a string of the format 'YYYY-MM-DD'.
 *
 * @param value - The input value to be converted into a date. Can be a Date object, timestamp, or date string.
 * @returns A formatted date string ('YYYY-MM-DD') or an empty string if the input is invalid.
 */
export const getDateValue = (value: any) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
        console.error("Invalid date input:", value);
        return "";
    }

    const pad = (n: number) => n.toString().padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    const result = `${year}-${month}-${day}`;
    console.log("DATE:", result);
    return result;
};

/**
 * Formats a given date input into a time string in 24-hour format, adjusted to the Europe/Madrid timezone.
 *
 * @param value - The input value to be converted into a date. Can be a Date object, timestamp, or date string.
 * @returns A formatted time string ('HH:MM:SS') in Spanish locale or an empty string if the input is invalid.
 */
export const getSpanishHourValue = (value: any) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
        console.error("Invalid date input:", value);
        return "";
    }

    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/Madrid",
    };

    const formatter = new Intl.DateTimeFormat("es-ES", options);
    const result = formatter.format(date);

    console.log("HORA (España):", result);
    return result;
};
