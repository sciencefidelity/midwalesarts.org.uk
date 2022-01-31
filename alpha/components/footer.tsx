import { useRouter } from "next/router"
import { Site, Social } from "generated/schema"
import FooterContact from "components/footerContact"
import Signup from "components/signup"
import Logos from "components/logos"
import FooterLinks from "components/footerLinks"

const currentYear = new Date().getFullYear()

const Footer = ({
  site, socialLinks
}: {
  site: Site
  socialLinks: Social[]
}) => {
  const { locale } = useRouter()
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
          &copy;{" "}
          {locale === "cy" && site.siteName.cy
            ? site.siteName.cy
            : site.siteName.en}{" "}
          {currentYear}
        </p>
      </div>
    </footer>
  )
}

export default Footer
