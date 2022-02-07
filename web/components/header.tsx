import { FC } from "react"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import ColorLogo from "components/colorLogo"
import Link from "components/link"
import Navigation from "components/navigation"
import { HeaderProps } from "lib/interfaces"
// TODO: screen reader text hard coded
const Header: FC<HeaderProps> = ({ caption, heroImage, menu }) => {
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
        <div
          className="hero"
          style={{ overflow: "hidden" }}
        >
          <img
            src={urlFor(heroImage)
              .auto("format")
              .width(1600)
              .quality(75)
              .url()}
            alt={heroImage.caption}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </header>
      <Navigation menu={menu} />
      <div className="heroCaption">{caption}</div>
    </>
  )
}
export default Header
