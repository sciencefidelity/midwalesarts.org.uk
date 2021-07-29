import * as React from "react"
import PropTypes from "prop-types"

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <h3>
          <a href="https://midwalesarts.org.uk" target="_blank" rel="noreferrer">
            Mid Wales Arts
          </a>
        </h3>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Centenery`,
}

export default Footer
