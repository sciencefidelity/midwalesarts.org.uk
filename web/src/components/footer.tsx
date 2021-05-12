import * as React from 'react'
import PropTypes from 'prop-types'

import '../scss/footer.scss'

import FooterContact from './footerContact'
import Signup from './signup'
import Logos from './logos/logos'
import FooterLinks from './footerLinks'

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <FooterContact />
        <div className="footerRight">
          <Signup />
          <Logos />
          <FooterLinks />
        </div>
        <p className="smallCopy">&copy; Mid Wales Arts 2021</p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer