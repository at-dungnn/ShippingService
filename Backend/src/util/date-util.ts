import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import isBetweenPlugin from "dayjs/plugin/isBetween";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");
dayjs.extend(customParseFormat);
dayjs.extend(isBetweenPlugin);


/**
 * Convert Date to ISO8601 string (JST)
 *
 * @param {Date} date Date
 * @returns {string} ISO8601 string (JST)
 */
export const dateToIsoString = (date: Date, format?: string): string =>
  dayjs(date).tz().format(format);
