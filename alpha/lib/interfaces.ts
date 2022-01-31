import { ReactNode } from "react"
import type {
  Artist,
  CaptionImage,
  Event,
  Exhibition,
  FrontPage,
  FrontPageSection,
  Menu,
  Post,
  Page,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  Site,
  Space,
  Social,
  Video
} from "@/generated/schema"

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

interface AllPageData {
  site: Site,
  socialLinks: Social[]
  menu: Menu[],
  sidebar?: {
    posts: Post[]
    events: Event[]
    exhibitions: Exhibition[]
  }
}

export interface IndexData extends AllPageData {
  featured: FrontPageSection[]
  frontPage: FrontPage
}

export interface PageData extends AllPageData {
  artists?: Artist[]
  currentExhibitions?: Exhibition[]
  futureExhibitions?: Exhibition[]
  heroArtist?: Artist
  page?: Page
  pastEvents?: Event[]
  pastExhibitions?: Exhibition[]
  posts?: Post[]
  recurringEvents?: Event[]
  spaces?: Space[]
  upcomingEvents?: Event[]
  videos?: Video[]
}

export interface LayoutProps {
  children: ReactNode
  heroImage?: Image | CaptionImage
  menu?: Menu[]
  site?: Site
  socialLinks?: Social[]
  title?: string
}
