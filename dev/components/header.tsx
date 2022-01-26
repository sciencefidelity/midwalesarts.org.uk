import Link from "next/link"
import Image from "next/image"
import ColorLogo from "@/components/colorLogo"
import Navigation from "@/components/navigation"
// import "../scss/header.scss"

const Header = ({ heroImage, heroImageCaption }: {
  heroImage: any
  heroImageCaption: {
    en: string
    cy: string
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
            src={heroImage}
            alt={heroImageCaption.en}
            className="heroImage"
          />
        </div>
      </header>
      <Navigation />
      <div className="heroCaption">{heroImageCaption}</div>
    </>
  )
}

export default Header
