import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import { urlFor } from "lib/utils"
import type { FrontPageSection } from "generated/schema"

const FrontPageFeature = ({ feature }: { feature: FrontPageSection }) => {
  const { locale } = useRouter()
  return (
    <div className="sectionContainer">
      <Image
        src={urlFor(feature.mainImage)
          .width(812)
          .height(634)
          .auto("format")
          .quality(75)
          .url()}
        alt={feature.mainImage.caption}
        width={812}
        height={634}
      />
      <div className="sectionHeroCaption caption">
        {feature.mainImage.caption}
      </div>
      <div className="sectionContent">
        <div className="sectionInsetImage">
          <Image
            src={urlFor(feature.subImage)
              .width(812)
              .height(634)
              .auto("format")
              .quality(75)
              .url()}
            alt={feature.subImage.caption}
            width={812}
            height={634}
          />
          <div className="caption">{" "}{feature.subImage.caption}</div>
        </div>
        <div>
          <div className="sectionTitleContainer">
            <div>
              <h2>{locale === "cy" && feature.title.cy ? feature.title.cy : feature.title.en}</h2>
              <h3>{locale === "cy" && feature.caption.cy ? feature.caption.cy : feature.caption.en}</h3>
            </div>
          </div>
          <div className="sectionText">
            <h4>{feature.heading.en}</h4>
            {feature.body.en && <BlockContent
              blocks={locale === "cy" && feature.body.cy ? feature.body.cy : feature.body.en}
              {...sanityClient.config()}
            />}
          </div>
        </div>
      </div>
      <div className="sectionCtaContainer">
        <div className="sectionCtaHr"></div>
        <Link href={`/${feature.ctaLink}/`}>
          <h2 className="sectionCta">
            <span>{locale === "cy" && feature.cta.cy ? feature.cta.cy : feature.cta.en}{" "}</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default FrontPageFeature
