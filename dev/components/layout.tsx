import { ReactNode } from "react"
import Head from "next/head"
import {
  Menu,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  Site,
  Social
} from "@/generated/schema"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Scrollup from "@/components/scrollup"
// import "styles/layout.scss"
// import styles from "@/components/layout.module.scss"
// import utilStyles from "@/styles/utils.module.scss"

const Layout = ({
  children,
  heroImage,
  menu,
  site,
  socialLinks
}: {
  children: ReactNode
  heroImage?: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
    caption?: string
  }
  menu?: Menu[]
  site?: Site
  socialLinks?: {
    socialLinks: Social[]
  }
}) => {
  return (
    <div>
      <Head></Head>
      <Header heroImage={heroImage} menu={menu} />
      <main>
        {children}
        <Scrollup />
      </main>

      <Footer site={site} socialLinks={socialLinks} />
    </div>
  )
}
export default Layout
