export const capitalize = (word: string): string =>
  word[0].toUpperCase() + word.slice(1, word.length)

export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
} as const

export const kebabCase = (word: string): string =>
  word.toLowerCase().split(" ").join("-").replace(/[^a-z0-9\-]/g, "")
