import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import "../scss/header.scss"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <header className="header">
      <div className="header__col header__col--l">
        <StaticImage
          src="../images/stefan_4.jpg"
          objectPosition={"50% 50%"}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Stefan Knapp"
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
}

Header.defaultProps = {
  siteTitle: `Centenery`,
}

export default Header
