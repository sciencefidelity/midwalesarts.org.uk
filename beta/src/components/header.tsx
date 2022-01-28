import React, { FC } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import ColorLogo from "../components/logos/colorLogo"
import Navigation from "./navigation"

import "../scss/header.scss"

interface Props {
  heroImage: any
  heroImageCaption: string
}

const Header: FC<Props> = ({ heroImage, heroImageCaption }) => {
  return (
    <>
      <header>
        <Link to="/">
          <span className="screenReaderText">Home</span>
          <ColorLogo logoClass="colorLogo" containerClass="logoContainer" />
        </Link>
        <div className="hero">
          <GatsbyImage
            image={heroImage}
            alt={heroImageCaption}
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
