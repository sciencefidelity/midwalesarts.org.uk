import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "lib/sanityClient"
import { LocaleString } from "lib/interfaces"
import { Artist, Image } from "lib/interfaces"

export const buildUrl = (locale: string, slug: string, type: string): string => {
  return `${subdir(locale, type)}/${slug}`
}

export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
}

export const joinName = (name: string) => {
  return name.split(" ").join("&nbsp;")
}

export const localize = (
  content: LocaleString, locale: string
): string => {
  return locale === "cy" && content.cy
    ? content.cy
    : content.en
}

export const sortNames = (names: Artist[]): Artist[] => {
  return names.sort((a, b) => {
    return a.title.split(" ").pop().localeCompare(b.title.split(" ").pop())
  })
}

export const subdir = (locale: string, type: string): string => {
  if (locale === "cy") {
    switch (type) {
    case "artist":
      return "/artistiaid"
    case "event":
      return "/digwyddiadau"
    case "exhibition":
      return "/arddangosfeydd"
    case "post":
      return "/newyddion"
    case "video":
      return "/fideos"
    case "workshop":
      return "/gweithdai"
    default:
      return ""
    }
  }
  if (locale === "en") {
    switch (type) {
    case "artist":
      return "/artists"
    case "event":
      return "/events"
    case "exhibition":
      return "/exhibitions"
    case "post":
      return "/news"
    case "video":
      return "/videos"
    case "workshop":
      return "/workshops"
    default:
      return ""
    }
  }
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
