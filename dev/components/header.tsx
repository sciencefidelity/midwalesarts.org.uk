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
              .auto("format")
              .width(1600)
              .height(334)
              .quality(75)
              .url()}
            alt={heroImage.caption}
            width={1600}
            height={334}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </header>
      <Navigation menu={menu} />
      <div className="heroCaption">{heroImage.caption}</div>
    </>
  )
}

export default Header
