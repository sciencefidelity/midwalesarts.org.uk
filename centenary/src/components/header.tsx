import * as React from "react"
import PropTypes from "prop-types"

import "../scss/header.scss"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <header className="header">
      <div className="left-column"></div>
      <div className="right-column">
        <h4>1 April to 31 September 2021</h4>
        <h1>{siteTitle}</h1>
        <h2>Stefan Knapp</h2>
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
