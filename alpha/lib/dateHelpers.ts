import { Locale, Workshop } from "lib/interfaces";

/**
 * An object of day names and translated in English and Welsh
 * @remarks Welsh: days.cy; English: days.en
 */
export const days = {
  cy: [
    "Suliau",
    "dydd Llun",
    "dydd Mawrth",
    "dydd Mercher",
    "dydd Iau",
    "dydd Gwener",
    "dydd Sadwrn",
  ],
  en: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

/**
 * Converts a day name to its corresponding day number
 * @remarks generates the day number from the day name, used in calculations
 * @param type - the day name
 * @returns the day number
 */
export function dayToNumber(type: string): number {
  switch (type) {
    case "Sunday":
      return 0;
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    default:
      return 0;
  }
}

/**
 * Gets the frequency of a workshop in the month
 * @remarks prints the times a workshop occurs in the month in Welsh and English
 * @param day - the day of the week the workshop occurs on
 * @param pos - the position in the month the workshop occurs on
 * @param locale - the current locale
 * @returns the day number
 */
export function freqString(day: string, pos: number, locale: Locale) {
  const localeDay = days[locale][dayToNumber(day)];
  if (locale === "cy") {
    switch (pos) {
      case 1:
        return "";
      case 2:
        return `(${localeDay} cyntaf a'r trydydd)`;
      case 3:
        return `(ail a phumed ${localeDay})`;
      case 4:
        return `(bob ${localeDay} cyntaf)`;
      case 5:
        return `(bob yn ail ${localeDay})`;
      case 6:
        return `(bob trydydd ${localeDay})`;
      case 7:
        return `(bob pedwerydd ${localeDay})`;
      default:
        return "";
    }
  }
  switch (pos) {
    case 1:
      return "";
    case 2:
      return `(first and third ${localeDay})`;
    case 3:
      return `(second and forth ${localeDay})`;
    case 4:
      return `(every first ${localeDay})`;
    case 5:
      return `(every second ${localeDay})`;
    case 6:
      return `(every third ${localeDay})`;
    case 7:
      return `(every forth ${localeDay})`;
    default:
      return "";
  }
}

/**
 * The frequesncy of a workshop over a two month period
 * @remarks uses a number returned by the Sanity API to determine the frequency
 * @param pos - the position in the month the workshop occurs on
 * @returns the workshop frequency as an array of numbers
 */
export function frequency(pos: number): number[] {
  switch (pos) {
    case 1:
      return [0, 1, 2, 3, 4, 5, 6, 7];
    case 2:
      return [0, 2, 4, 6];
    case 3:
      return [1, 3, 5, 7];
    case 4:
      return [0, 4];
    case 5:
      return [1, 5];
    case 6:
      return [2, 6];
    case 7:
      return [3, 7];
    default:
      return [0, 1, 2, 3, 4, 5, 6, 7];
  }
}

/**
 * Next month
 * @remarks determines the first day of the next month from now
 * @returns the first day of the next month
 */
export function nextMonth(): Date {
  const first = new Date(new Date().setDate(1));
  return first.getMonth() === 11
    ? new Date(first.getFullYear() + 1, 0, 1)
    : new Date(first.getFullYear(), first.getMonth() + 1, 1);
}

/**
 * Workshop dates
 * @remarks gets the dates of workshops over the next two months
 * @param day - the day of the week the workshop occurs on
 * @param freq - the frequency of the workshop as defined by the Sanity API
 * @returns an array of dates of the workshop for the next two months
 */
export const getDates = (day: number, freq: number[]): Date[] => {
  const first = new Date(new Date().setDate(1));
  const daysArray = [];
  while (first.getDay() !== day) {
    first.setDate(first.getDate() + 1);
  }
  while (daysArray.length < 4) {
    daysArray.push(new Date(first.getTime()));
    first.setDate(first.getDate() + 7);
  }
  const next = nextMonth();
  while (next.getDay() !== day) {
    next.setDate(next.getDate() + 1);
  }
  while (daysArray.length < 8) {
    daysArray.push(new Date(next.getTime()));
    next.setDate(next.getDate() + 7);
  }
  return daysArray.filter((_, idx) => freq.includes(idx));
};

/**
 * Next workshop date
 * @remarks gets the next workshop date from the current date
 * @param day - the day of the week the workshop occurs on
 * @param freq - the frequency of the workshop as defined by the Sanity API
 * @returns the date of the next workshop as a Date string
 */
export const nextDate = (day: number, freq: string): Date => {
  const dates = getDates(day, frequency(Number(freq)));
  // eslint-disable-next-line unicorn/prefer-array-find
  return dates.filter((e) => e >= new Date())[0];
};

/**
 * Workshops in the next two months
 * @remarks sorts the workshops in the next two months by date
 * @param events - an array of {@link Workshop} objects
 * @returns an array of {@link Workshop} objects sorted by date
 */
export function sortWorkshops(events: Workshop[]): Workshop[] {
  return events.sort((a, b) =>
    nextDate(dayToNumber(a.day), a.frequency).toISOString() <
    nextDate(dayToNumber(b.day), b.frequency).toISOString()
      ? -1
      : nextDate(dayToNumber(a.day), a.frequency).toISOString() >
        nextDate(dayToNumber(b.day), a.frequency).toISOString()
      ? 1
      : 0
  );
}
