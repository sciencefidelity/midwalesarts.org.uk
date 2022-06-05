import { Workshop } from "lib/interfaces"

export const days = {
  cy: [
    "Suliau",
    "Dydd Llun",
    "Dydd Mawrth",
    "Dydd Mercher",
    "Dydd Iau",
    "Dydd Gwener",
    "Dydd Sadwrn"
  ],
  en: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}

export const dayToNumber = (type: string): number => {
  switch (type) {
  case "Sunday":
    return 0
  case "Monday":
    return 1
  case "Tuesday":
    return 2
  case "Wednesday":
    return 3
  case "Thursday":
    return 4
  case "Friday":
    return 5
  case "Saturday":
    return 6
  }
}

export const frequency = (pos: number) => {
  switch (pos) {
  case 1: return [0, 1, 2, 3, 4, 5, 6, 7]
  case 2: return [0, 2, 4, 6]
  case 3: return [1, 3, 5, 7]
  case 4: return [0, 4]
  case 5: return [1, 5]
  case 6: return [2, 6]
  case 7: return [3, 7]
  default: return [0, 1, 2, 3, 4, 5, 6, 7]
  }
}

export const nextMonth = () => {
  const first = new Date(new Date().setDate(1))
  if (first.getMonth() === 11) {
    return new Date(first.getFullYear() + 1, 0, 1)
  } else {
    return new Date(first.getFullYear(), first.getMonth() + 1, 1)
  }
}

export const getDates = (day: number, freq: number[]): Date[] => {
  const first = new Date(new Date().setDate(1))
  const days = []
  while (first.getDay() !== day) {
    first.setDate(first.getDate() + 1)
  }
  while (days.length < 4) {
    days.push(new Date(first.getTime()))
    first.setDate(first.getDate() + 7)
  }
  const next = nextMonth()
  while (next.getDay() !== day) {
    next.setDate(next.getDate() + 1)
  }
  while (days.length < 8) {
    days.push(new Date(next.getTime()))
    next.setDate(next.getDate() + 7)
  }
  return days.filter((_, idx) => freq.some(p => idx === p))
}

export const nextDate = (day: number, freq: string): Date => {
  const dates = getDates(day, frequency(Number(freq)))
  return dates.filter(e => e >= new Date())[0]
}

export const sortWorkshops = (events: Workshop[]): Workshop[] => {
  return events.sort((a, b) => {
    return nextDate(dayToNumber(a.day), a.frequency).toISOString() <
      nextDate(dayToNumber(b.day), b.frequency).toISOString()
      ? -1
      : nextDate(dayToNumber(a.day), a.frequency).toISOString() >
        nextDate(dayToNumber(b.day), a.frequency).toISOString()
        ? 1
        : 0
  })
}
