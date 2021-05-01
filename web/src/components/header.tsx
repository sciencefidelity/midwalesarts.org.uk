import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Navigation from './navigation'
import ColorLogo from '../components/logos/colorLogo'

import '../scss/header.scss'

const Header = ({ 
  heroImage, heroImageCaption
}) => (
  <>
    <header>
      <Link to="/">
        <ColorLogo 
          logoClass = "colorLogo"
          containerClass = "logoContainer"
        />
      </Link>
      <div className="hero">
        <GatsbyImage 
          image={heroImage}
          alt="an image"
          className="heroImage"
        />
        <div className="menuOverlay">
          <Navigation />
        </div>
      </div>
    </header>
    <div className="heroCaption">{heroImageCaption}</div>
  </>
)

export default Header
