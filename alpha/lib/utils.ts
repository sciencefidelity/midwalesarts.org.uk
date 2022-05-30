import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "lib/sanityClient"
import { LocaleString } from "lib/interfaces"
import { Artist, Image, Workshop } from "lib/interfaces"

export const buildUrl = (locale: string, slug: string, type: string): string => {
  return `${subdir(locale, type)}/${slug}`
}

export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
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

export const getNextDate = (day: number): Date => {
  const now = new Date()
  const dateCopy = new Date(now.getTime())
  let nextDate: Date
  if (day  === now.getDay()) {
    return nextDate = now
  }
  nextDate = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + day) % 7 || 7)
    )
  )
  return nextDate
}

export const joinName = (name: string): string => {
  return name.split(" ").join("&nbsp;")
}

export const localize = (
  content: LocaleString, locale: string
): string => {
  return locale === "cy" && content.cy
    ? content.cy
    : content.en
}

export const sortArtists = (artists: Artist[]): Artist[] => {
  return artists.sort((a, b) => {
    return a.title
      .trim()
      .replace(/(^\b\w+\s)/gi, "")
      .localeCompare(b.title.trim().replace(/(^\b\w+\s)/gi, ""))
  })
}

export const sortWorkshops = (events: Workshop[]): Workshop[] => {
  return events.sort((a, b) => {
    return getNextDate(dayToNumber(a.day)).toISOString() <
      getNextDate(dayToNumber(b.day)).toISOString()
      ? -1
      : getNextDate(dayToNumber(a.day)).toISOString() >
        getNextDate(dayToNumber(b.day)).toISOString()
        ? 1
        : 0
  })
}

export const subdir = (locale: string, type: string): string => {
  if (locale === "cy") {
    switch (type) {
    case "artist":
      return "artistiaid"
    case "event":
      return "digwyddiadau"
    case "exhibition":
      return "arddangosfeydd"
    case "post":
      return "newyddion"
    case "video":
      return "fideos"
    case "workshop":
      return "gweithdai"
    default:
      return ""
    }
  }
  if (locale === "en") {
    switch (type) {
    case "artist":
      return "artists"
    case "event":
      return "events"
    case "exhibition":
      return "exhibitions"
    case "post":
      return "news"
    case "video":
      return "videos"
    case "workshop":
      return "workshops"
    default:
      return ""
    }
  }
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
