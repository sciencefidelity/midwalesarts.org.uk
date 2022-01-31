import { CSSProperties, MouseEventHandler, ReactNode } from "react"
import type {
  Artist,
  Artwork,
  CaptionImage,
  Event,
  Exhibition,
  FrontPage,
  FrontPageSection,
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

export interface AllPageData {
  menu: Page[],
  sidebar?: {
    posts: Post[]
    events: Event[]
    exhibitions: Exhibition[]
  }
  site: Site,
  socialLinks: Social[]
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

export interface ArtistData extends AllPageData {
  artist: ArtistArtworks
}

interface ArtistArtworks extends Artist {
  artworks: ArtworkAspect[]
}

interface ArtworkAspect extends Artwork {
  aspect: CSSProperties
}

export interface EventData extends AllPageData {
  event: Event
}

export interface ExhibitionData extends AllPageData {
  exhibition: ExhibitionArtworks
}

interface ExhibitionArtworks extends Exhibition {
  artworks: ArtworkAspect[]
}

export interface NewsData extends AllPageData {
  post: Post
}

export interface VideoData extends AllPageData {
  video: Video
}

export interface LayoutProps {
  children: ReactNode
  heroImage?: Image | CaptionImage
  menu?: Page[]
  site?: Site
  socialLinks?: Social[]
  title?: string
}

export interface ArtistsProps {
  page: Page
  artists: Artist[]
}

export interface EventsProps {
  page: Page
  pastEvents?: Event[]
  recurringEvents?: Event[]
  upcomingEvents?: Event[]
}

export interface ExhibitionsProps {
  page: Page
  currentExhibitions?: Exhibition[]
  futureExhibitions?: Exhibition[]
  pastExhibitions?: Exhibition[]
}

export interface NewsProps {
  page: Page
  posts: Post[]
}

export interface PageProps {
  page: Page
  events?: Event[]
  exhibitions?: Exhibition[]
  posts?: Post[]
}

export interface VisitProps {
  page: Page
  spaces: Space[]
}

export interface VideosProps {
  page: Page
  videos: Video[]
}

export interface EventPreviewProps {
  heading: string
  eventData: Event[]
  marginTop: CSSProperties
  grid: string
}

export interface ExhibitionPreviewProps {
  heading: string
  exhibition: Exhibition
}

export interface HeaderProps {
  heroImage: CaptionImage
  menu: Page[]
}

export interface NavProps {
  menu: Page[]
}

export interface FooterProps {
  site: Site
  socialLinks: Social[]
}

export interface SidebarProps {
  events: Event[]
  exhibitions: Exhibition[]
  posts: Post[]
}

export interface LogoProps {
  logoClass: string
  containerClass: string
}

export interface LocationProps {
  _lat: number
  _lng: number
  _text: string
}

export interface ModalProps {
  modal: boolean
  modalImage: ArtworkAspect | Record<string, never>
  closeModal: MouseEventHandler<HTMLDivElement>
  prevIndex: MouseEventHandler<HTMLDivElement>
  nextIndex: MouseEventHandler<HTMLDivElement>
}
