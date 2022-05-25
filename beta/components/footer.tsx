import { FC } from "react"
import FooterContact from "components/footerContact"
import Signup from "components/signup"
import FooterLinks from "components/footerLinks"
import Localize from "components/localize"
import Logos from "components/logos"
import { FooterProps } from "lib/interfaces"

const Footer: FC<FooterProps> = ({ site, socialLinks}) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className="footerContainer">
        <FooterContact site={site} />
        <div className="footerRight">
          <Signup site={site} />
          <Logos />
          <FooterLinks socialLinks={socialLinks} />
        </div>
        <p className="smallCopy">
          &copy;{" "}<Localize data={site.siteName} />{" "}{currentYear}
        </p>
      </div>
    </footer>
  )
}
export default Footer
