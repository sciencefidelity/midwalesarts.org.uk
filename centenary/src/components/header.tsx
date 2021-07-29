import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
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
