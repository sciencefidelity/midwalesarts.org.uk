import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "@/lib/sanityClient"
import type {
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot
} from "@/generated/schema"

export const capitalize = (word: string): string =>
  word[0].toUpperCase() + word.slice(1, word.length)

export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
} as const

export const kebabCase = (word: string): string =>
  word
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^a-z0-9\-]/g, "")

interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
