import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

import "../scss/header.scss"

interface Props {
  siteTitle?: string
  image: any
  alt: string
  fit?: any
}

const Header: React.FC<Props> = ({ siteTitle, image, alt, fit }) => {
  return (
    <header className="header">
      <div className="header__col header__col--l">
        <GatsbyImage
          image={image}
          alt={alt}
          objectFit={fit}
          objectPosition={"50% 50%"}
          className="header__image"
        />
      </div>
      <div className="header__col header__col--r">
        <h4>1 April to 31 September 2021</h4>
        <h1>Knapp</h1>
        <h2>{siteTitle}</h2>
        <a href="https://midwalesarts.org.uk" target="_blank" rel="noreferrer">
          <h3>Mid Wales Arts</h3>
        </a>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: `Centenery`,
  fit: `cover`,
}

export default Header
