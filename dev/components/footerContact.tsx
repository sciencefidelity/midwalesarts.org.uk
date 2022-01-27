import { useRouter } from "next/router"
import { Site } from "@/generated/schema"

const year = new Date().getFullYear()

const FooterContact = ({ site }: { site: Site }) => {
  const { locale } = useRouter()
  return (
    <div>
      <p>
        {locale === "cy" && site.openingHeading.cy ? site.openingHeading.cy : site.openingHeading.en}
        <br />
        {locale === "cy" && site.openingTimes.cy ? site.openingTimes.cy : site.openingTimes.en}
      </p>
      <p>
        {locale === "cy" && site.siteName.cy ? site.siteName.cy : site.siteName.en}
        <br />
        {locale === "cy" && site.addressLine1.cy ? site.addressLine1.cy : site.addressLine1.en}
        <br />
        {locale === "cy" && site.addressLine2.cy ? site.addressLine2.cy : site.addressLine2.en}
      </p>
      <p>
        {site.telephone.en}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p className="copy">
        &copy;{" "}
        {locale === "cy" && site.siteName.cy ? site.siteName.cy : site.siteName.en}
        {" "}{year}
      </p>
    </div>
  )
}

export default FooterContact
