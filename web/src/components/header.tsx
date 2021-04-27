import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Navigation from "./navigation"
import HeaderLogo from "./logos/headerLogo"

import "../scss/header.scss"

const Header = ({ 
  heroImage, heroImageCaption, heroTitle, heroCaption 
}) => (
  <>
    <header>
      <div className="hero">
        <GatsbyImage 
          image={heroImage}
          alt="an image"
          className="heroImage"
        />
        <div className="menuOverlay">
          <Navigation />
        </div>
        <div className="headerContainer">
          <div className="titleContainer">
            <h2>{heroTitle}</h2>
            <h3>{heroCaption}</h3>
          </div>
          <HeaderLogo />
          <div className="heroCaption">{heroImageCaption}</div>
        </div>
      </div>
    </header>
  </>
)

export default Header
