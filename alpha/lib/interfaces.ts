import { CSSProperties } from "react"

export interface Address {
  town: string
  county: string
  postcode: string
}

export interface Artist extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "artist"
  body: PortableText
  disciplines: string[]
  localization: Localization
  mainImage: Image
  ogDescription: string
  ogImage: Image
  ogTitle: string
  slug: string
  title: string
  works: Artwork[]
}

export interface Artwork {
  _id: string
  artist: string
  aspect: CSSProperties
  date: number
  mainImage: Image
  medium: string
  sold: boolean
  price: string
  title: string
}

export interface CTALink {
  _type: string
  slug: string
}

export interface Event extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "event"
  body: PortableText
  briteLink: string
  date: string
  localization: Localization
  mainImage: Image
  ogDescription: string
  ogImage: Image
  ogTitle: string
  slug: string
  title: string
}

export interface Exhibition extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "exhibition"
  body: PortableText
  dateEnd: string
  dateStart: string
  localization: Localization
  mainImage: Image
  ogDescription: string
  ogImage: Image
  ogTitle: string
  slug: string
  title: string
  works: Artwork[]
}

export interface Feedback {
  _key: string
  quote: string
}

export interface Headline extends SanityDocument {
  body: string
  caption: string
  cta: string
  ctaLink: CTALink
  heading: string
  mainImage: Image
  subImage: Image
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

export interface Label {
  key: string
  text: LocaleString
}

export type Locale = "cy" | "en";

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

export interface Navigation {
  _key: string
  label: LocaleString
  slug: LocaleString
}

export interface Organisation {
  address: Address
  email: string
  opening: LocaleString
  telephone: string
}

export interface Page extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "page"
  body?: PortableText
  artists?: Artist[]
  cta?: string
  ctaLink?: CTALink
  events?: Event[]
  exhibitions?: Exhibition[]
  feedback?: Feedback[]
  futureExhibitions?: Exhibition[]
  headlines?: Headline[]
  hero?: RandomHero
  localization: Localization
  mainImage?: Image
  ogDescription: string
  ogImage: Image
  ogTitle: string
  pastExhibitions?: Exhibition[]
  pastEvents?: Event[]
  posts?: Post[]
  sidebar?: Sidebar
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

export interface PageHead {
  description: string
  ogDescription: string
  ogImage: Image
  ogSiteName?: string
  ogTitle: string
  ogURL: string
  slug?: string
  title: string
}

export interface Post extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "post"
  body: PortableText
  image: Image
  localization: Localization
  nextPost: Post
  ogDescription: string
  ogImage: Image
  ogTitle: string
  previousPost: Post
  publishedAt: string
  slug: string
  tags: string[]
  title: string
}

export interface RandomHero {
  mainImage: Image
}

export interface Settings {
  canonicalURL: string
  description: LocaleString
  ogDescription: LocaleString
  ogImage: Image
  ogTitle: LocaleString
  social: Social[]
  title: LocaleString
}

export interface Sidebar {
  events: Event[]
  exhibitions: Exhibition[]
  posts: Post[]
  workshops: Workshop[]
}

export interface Social {
  _key: string
  name: string
  url: string
}

export interface Space extends SanityDocument {
  body: PortableText
  mainImage: Image
  slug: string
  title: string
}

export interface Video extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "video"
  body: PortableText
  localization: Localization
  mainImage: Image
  ogDescription: string
  ogImage: Image
  ogTitle: LocaleString
  publishDate: string
  slug: string
  title: string
  videoLink: string
}

export interface Workshop extends SanityDocument {
  __i18n_lang: "cy" | "en"
  _type: "workshop"
  body: PortableText
  day: string
  endTime: string
  localization: Localization
  mainImage: Image
  ogDescription: string
  ogImage: Image
  ogTitle: LocaleString
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
  "Workshops";

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
  : T;

export declare type SanityReference<_T> = {
  _type: "reference"
  _ref: string
};
