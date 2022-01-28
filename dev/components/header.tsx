import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import {
  Menu,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot
} from "generated/schema"
import ColorLogo from "components/colorLogo"
import Navigation from "components/navigation"

const Header = ({ heroImage, menu }: {
  heroImage: {
    _type: "image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
    caption?: string
  }
  menu: any
}) => {
  const { locale } = useRouter()
  return (
    <>
      <header>
        <Link href="/">
          <a>
            <span className="screenReaderText">{locale === "cy" ? "Cartref" : "Home"}</span>
            <ColorLogo logoClass="colorLogo" containerClass="logoContainer" />
          </a>
        </Link>
        <div className="hero">
          <Image
            src={urlFor(heroImage)
              .width(1440)
              .height(670)
              .auto("format")
              .quality(75)
              .url()}
            alt={heroImage.caption}
            width={1440}
            height={670}
          />
        </div>
      </header>
      <Navigation menu={menu} />
      <div className="heroCaption">{heroImage.caption}</div>
    </>
  )
}

export default Header
