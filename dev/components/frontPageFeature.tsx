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
          <div className="caption"> {feature.subImage.caption}</div>
        </div>
        <div>
          <div className="sectionTitleContainer">
            <div>
              <h2>
                {locale === "cy" && feature.title.cy
                  ? feature.title.cy
                  : feature.title.en}
              </h2>
              <h3>
                {locale === "cy" && feature.caption.cy
                  ? feature.caption.cy
                  : feature.caption.en}
              </h3>
            </div>
          </div>
          <div className="sectionText">
            <h4>{feature.heading.en}</h4>
            {feature.body.en && (
              <BlockContent
                blocks={
                  locale === "cy" && feature.body.cy
                    ? feature.body.cy
                    : feature.body.en
                }
                {...sanityClient.config()}
              />
            )}
          </div>
        </div>
      </div>
      <div className="sectionCtaContainer">
        <div className="sectionCtaHr"></div>
        <Link href={`/${feature.ctaLink}/`}>
          <a>
            <h2 className="sectionCta">
              <span>
                {locale === "cy" && feature.cta.cy
                  ? feature.cta.cy
                  : feature.cta.en}
                &nbsp;
              </span>
            </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FrontPageFeature
