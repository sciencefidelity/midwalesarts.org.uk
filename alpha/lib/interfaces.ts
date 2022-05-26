export interface Address {
  town: string
  county: string
  postcode: string
}

export interface Artist extends SanityDocument {
  mainImage: Image
  slug: string
  title: string
}

export interface Event extends SanityDocument {
  date: string
  mainImage: Image
  slug: string
  title: string
}

export interface Exhibition extends SanityDocument {
  dateEnd: string
  dateStart: string
  mainImage: Image
  slug: string
  title: string
}

export interface Feedback {
  _key: string
  quote: string
}

export interface Headline extends SanityDocument {
  body: LocaleString
  caption: LocaleString
  cta: LocaleString
  ctaLink: LocaleString
  heading: LocaleString
  mainImage: Image
  subImage: Image
  title: LocaleString
}

export interface HeadProps {
  description: string
  ogDescription: string
  ogImage: Image
  ogSiteName?: string
  ogTitle: string
  ogURL: string
  title: string
}

export interface Image {
  _key?: string
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  caption?: string
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface LocaleAddress {
  cy: Address
  en: Address
}

export interface LocaleString {
  cy: string
  en: string
}

export interface Localization {
  id: string
  locale: "cy" | "en"
  slug: string[]
}

export interface Page extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "page"
  body?: PortableText
  artists?: Artist[]
  cta?: string
  ctaLink?: LocaleString
  events?: Event[]
  exhibitions?: Exhibition[]
  feedback?: Feedback[]
  futureExhibitions?: Exhibition[]
  headline?: Headline
  localization: Localization
  mainImage?: Image
  pastExhibitions?: Exhibition[]
  pastEvents?: Event[]
  posts?: Post[]
  slug: string
  spaces?: Space[]
  subImage?: Image
  subtitle?: string
  template: Template
  title: string
  videos?: Video[]
  workshops?: Workshop[]
}

export interface PageContext {
  defaultLocale: string
  locale: string
  locales: string[]
  localization: Localization
  slug: string[] | string
}

export interface Post extends SanityDocument {
  image: Image
  publishedAt: string
  slug: string
  title: string
}

export interface Settings {
  description: string
  title: string
}

export interface Space extends SanityDocument {
  body: PortableText
  mainImage: Image
  slug: string
  title: string
}

export interface Video extends SanityDocument {
  mainImage: Image
  slug: string
  title: string
}

export interface Workshop extends SanityDocument {
  day: string
  endTime: string
  mainImage: Image
  slug: string
  startTime: string
  title: string
}

type Template =
  "Artists" |
  "Events" |
  "Exhibitions" |
  "Home" |
  "News" |
  "Page" |
  "Support" |
  "Videos" |
  "Visit" |
  "Workshops"

export type PortableText = Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: "image"
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;

export interface SanityBlock {
  _type: "block"
  [key: string]: any
}

export interface SanityDocument {
  __i18n_lang: string
  _id: string
  _createdAt: string
  _rev: string
  _updatedAt: string
}

export interface SanityImageAsset extends SanityDocument {
  _type: "sanity.imageAsset"
  assetId: string
  extension: string
  metadata: SanityImageMetadata
  mimeType: string
  originalFilename: string
  path: string
  sha1hash: string
  size: number
  uploadId: string
  url: string
}

export interface SanityImageCrop {
  _type: "sanity.imageCrop"
  bottom: number
  left: number
  right: number
  top: number
}

export interface SanityImageDimensions {
  _type: "sanity.imageDimensions"
  aspectRatio: number
  height: number
  width: number
}

export interface SanityImageHotspot {
  _type: "sanity.imageHotspot"
  height: number
  width: number
  x: number
  y: number
}

export interface SanityImageMetadata {
  _type: "sanity.imageMetadata"
  dimensions: SanityImageDimensions
  hasAlpha: boolean
  isOpaque: boolean
  lqip: string
  palette: SanityImagePalette
}

export interface SanityImagePalette {
  _type: "sanity.imagePalette"
  darkMuted: SanityImagePaletteSwatch
  darkVibrant: SanityImagePaletteSwatch
  dominant: SanityImagePaletteSwatch
  lightMuted: SanityImagePaletteSwatch
  lightVibrant: SanityImagePaletteSwatch
  muted: SanityImagePaletteSwatch
  vibrant: SanityImagePaletteSwatch
}

export interface SanityImagePaletteSwatch {
  _type: "sanity.imagePaletteSwatch"
  background: string
  foreground: string
  population: number
  title: string
}

export declare type SanityKeyed<T> = T extends object
  ? T & {
      _key: string
    }
  : T

export declare type SanityReference<_T> = {
  _type: "reference"
  _ref: string
}
