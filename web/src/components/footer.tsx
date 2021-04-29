import * as React from 'react'
import PropTypes from 'prop-types'

import '../scss/footer.scss'

const Footer = () => (
  <footer>
    <div>
      
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer