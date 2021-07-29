import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

const Footer: React.FC<Props> = ({ siteTitle }) => (
  <footer>
    <div>
      <h3 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h3>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Centenery`,
}

export default Footer
