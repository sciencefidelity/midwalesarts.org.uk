import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "@/lib/sanityClient"
import { LocaleRichText, LocaleString } from "generated/schema"
import { Image } from "@/lib/interfaces"

export const buildUrl = (slugData: any) => {
  const slug = slugData.slug && slugData.slug.en
    ? slugData.slug.en.current
    : slugData.slug.current
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

export const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1, word.length)
}

export const kebabCase = (word: string) => {
  return word.toLowerCase().split(" ").join("-").replace(/[^a-z0-9-]/g, "")
}

export const localize = (
  content: LocaleString | LocaleRichText,
  locale: string
) => {
  return locale === "cy" && content.cy
    ? content.cy
    : content.en
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}

// https://stackoverflow.com/questions/5845238/javascript-generate-transparent-1x1-pixel-in-dataurl-format/33919020#33919020

export const hexDataURL = (hexColor: string) => {
  return `data:image/gif;base64,R0lGODlhAQABAPAA${encodeHex(
    hexColor
  )}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

const encodeHex = (hexColor: string) => {
  const s = hexColor.substring(1, 7)
  const rgb = [
    parseInt(s[0] + s[1], 16),
    parseInt(s[2] + s[3], 16),
    parseInt(s[4] + s[5], 16)
  ]
  return encodeRGB(rgb[0], rgb[1], rgb[2])
}

const encodeRGB = (r: number, g: number, b: number) => {
  return triplet(0, r, g) + triplet(b, 255, 255)
}

const triplet = (e1: number, e2: number, e3: number) => {
  const enc1 = e1 >> 2
  const enc2 = ((e1 & 3) << 4) | (e2 >> 4)
  const enc3 = ((e2 & 15) << 2) | (e3 >> 6)
  const enc4 = e3 & 63
  return (
    keyStr.charAt(enc1) +
    keyStr.charAt(enc2) +
    keyStr.charAt(enc3) +
    keyStr.charAt(enc4)
  )
}
