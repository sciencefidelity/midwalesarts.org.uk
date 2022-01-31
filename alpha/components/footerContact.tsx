import Localize from "components/localize"
import { Site } from "@/generated/schema"

const year = new Date().getFullYear()

const FooterContact = ({ site }: { site: Site }) => {
  return (
    <div>
      <p>
        <Localize data={site.openingHeading} /><br />
        <Localize data={site.openingTimes} />
      </p>
      <p>
        <Localize data={site.siteName} /><br />
        {site.addressLine1}<br />
        {site.addressLine2}
      </p>
      <p>
        {site.telephone}<br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p className="copy">
        &copy;{" "}<Localize data={site.siteName} />{year}
      </p>
    </div>
  )
}

export default FooterContact
