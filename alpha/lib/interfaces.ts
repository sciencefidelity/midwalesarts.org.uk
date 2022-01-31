import { ReactNode } from "react"
import type {
  CaptionImage,
  Event,
  Exhibition,
  FrontPage,
  FrontPageSection,
  Menu,
  Post,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  Site,
  Social
} from "@/generated/schema"

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface IndexData {
  featured: FrontPageSection[]
  frontPage: FrontPage
  site: Site,
  socialLinks: Social[]
  menu: Menu[],
  sidebar: {
    posts: Post[]
    events: Event[]
    exhibitions: Exhibition[]
  }
}

export interface LayoutProps {
  children: ReactNode
  heroImage?: Image | CaptionImage
  menu?: Menu[]
  site?: Site
  socialLinks?: Social[]
  title?: string
}
