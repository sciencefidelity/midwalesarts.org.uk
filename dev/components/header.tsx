import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/lib/utils"
import {
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot
} from "@/generated/schema"
import ColorLogo from "@/components/colorLogo"
import Navigation from "@/components/navigation"
// import "../scss/header.scss"

const Header = ({ heroImage }: {
  heroImage: {
    _type: "Image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
    caption: string
  }
}) => {
  return (
    <>
      <header>
        <Link href="/">
          <>
            <span className="screenReaderText">Home</span>
            <ColorLogo logoClass="colorLogo" containerClass="logoContainer" />
          </>
        </Link>
        <div className="hero">
          <Image
            src={urlFor(heroImage)
              .width(1440)
              .height(900)
              .auto("format")
              .quality(75)
              .url()}
            alt={heroImage.caption}
            width={1440}
            height={900}
          />
        </div>
      </header>
      <Navigation />
      <div className="heroCaption">{heroImage.caption}</div>
    </>
  )
}

export default Header
