import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "lib/sanityClient"
import { LocaleRichText, LocaleString } from "generated/schema"
import { Image, SlugProps } from "lib/interfaces"
import { Artist } from "generated/schema"

export const buildUrl = (slugData: SlugProps): string => {
  let slug = ""
  if (slugData?.slug?.current) slug = slugData?.slug?.current
  if (slugData?.slug?.en?.current) slug = slugData?.slug?.en?.current
  let directory: string
  switch (slugData._type) {
  case "artist":
    directory = "/artists"
    break
  case "event":
    directory = "/events"
    break
  case "exhibition":
    directory = "/exhibitions"
    break
  case "post":
    directory = "/news"
    break
  case "video":
    directory = "/videos"
    break
  default:
    directory = ""
  }
  return `${directory}/${slug}`
}

export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
}

export const localize = (
  content: LocaleString | LocaleRichText,
  locale: string
) => {
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

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
