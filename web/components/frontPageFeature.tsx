import Image from "next/image"
import { urlFor } from "lib/utils"
import Link from "components/link"
import Localize from "components/localize"
import PortableText from "components/portableText"
import type { FrontPageSection } from "generated/schema"

const FrontPageFeature = ({ feature }: { feature: FrontPageSection }) => {
  return (
    <div className="sectionContainer">
      <div className="sectionHero">
        <Image
          src={urlFor(feature.mainImage)
            .width(1080)
            .height(450)
            .auto("format")
            .quality(75)
            .url()}
          width={1080}
          height={450}
          objectFit="cover"
          alt={feature.subImage.caption}
        />
      </div>
      <div className="sectionHeroCaption caption">
        {feature.mainImage.caption}
      </div>
      <div className="sectionContent">
        <div className="sectionInsetImage">
          <div className="sectionInset">
            <Image
              src={urlFor(feature.subImage)
                .width(1080)
                .auto("format")
                .quality(75)
                .url()}
              width={340}
              height={510}
              objectFit="cover"
              alt={feature.subImage.caption}
            />
          </div>
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
            {feature.body.en && (
              <PortableText blocks={feature.body} />
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
