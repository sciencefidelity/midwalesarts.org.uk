import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import ColorLogo from "components/colorLogo"
import Link from "components/link"
import Navigation from "components/navigation"
import { HeaderProps } from "lib/interfaces"

const Header: FC<HeaderProps> = ({ heroImage, menu }) => {
  const { locale } = useRouter()
  return (
    <>
      <header>
        <Link href="/">
          <span className="screenReaderText">
            {locale === "cy" ? "Hafan" : "Home"}
          </span>
          <ColorLogo logoClass="colorLogo" containerClass="logoContainer" />
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
