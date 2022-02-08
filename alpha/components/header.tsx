import { FC } from "react"
import { useRouter } from "next/router"
import ColorLogo from "components/colorLogo"
import Image from "components/image"
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
          <Image caption={caption} image={heroImage} width={1600} />
        </div>
      </header>
      <Navigation menu={menu} />
      <div className="heroCaption">{caption}</div>
    </>
  )
}
export default Header
