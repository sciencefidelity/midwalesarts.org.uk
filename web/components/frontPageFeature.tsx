import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { urlFor } from "lib/utils"
import { components } from "components/portableTextComponents"
import Link from "components/link"
import Localize from "components/localize"
import type { FrontPageSection } from "generated/schema"

const FrontPageFeature = ({ feature }: { feature: FrontPageSection }) => {
  const { locale } = useRouter()
  const blocks = locale === "cy" && feature.body.cy
    ? feature.body.cy
    : feature.body.en
  return (
    <div className="sectionContainer">
      <div className="sectionHero">
        <img
          src={urlFor(feature.mainImage)
            .width(1080)
            .height(450)
            .auto("format")
            .quality(75)
            .url()}
          width={1080}
          height={450}
          alt={feature.subImage.caption}
        />
      </div>
      <div className="sectionHeroCaption caption">
        {feature.mainImage.caption}
      </div>
      <div className="sectionContent">
        <div className="sectionInsetImage">
          <img
            src={urlFor(feature.subImage)
              .width(1080)
              .auto("format")
              .quality(75)
              .url()}
            width={340}
            height={510}
            className="sectionInset"
            alt={feature.subImage.caption}
          />
          <div className="caption">{feature.subImage.caption}</div>
        </div>
        <div>
          <div className="sectionTitleContainer">
            <div>
              <h2>{feature.title && <Localize data={feature.title} />}</h2>
              <h3>{feature.caption && <Localize data={feature.caption} />}</h3>
            </div>
          </div>
          <div className="sectionText">
            <h4>{feature.heading && <Localize data={feature.heading} />}</h4>
            {feature.body && (
              <PortableText value={blocks} components={components} />
            )}
          </div>
        </div>
      </div>
      <div className="sectionCtaContainer">
        <div className="sectionCtaHr"></div>
        <Link href={`/${feature.ctaLink}/`}>
          <h2 className="sectionCta">
            <span>{feature.cta && <Localize data={feature.cta} />}&nbsp;</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
export default FrontPageFeature
