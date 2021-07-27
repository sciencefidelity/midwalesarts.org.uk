import React, { FC } from "react"

import "../scss/footer.scss"

import FooterContact from "./footerContact"
import Signup from "./signup"
import Logos from "./logos/logos"
import FooterLinks from "./footerLinks"

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footerContainer">
        <FooterContact />
        <div className="footerRight">
          <Signup />
          <Logos />
          <FooterLinks />
        </div>
        <p className="smallCopy">&copy; Mid Wales Arts {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
