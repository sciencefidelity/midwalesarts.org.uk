import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl, urlFor } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Headline } from "lib/interfaces"

interface Props {
  headline: Headline
}

export const FrontPageHeadline: FC<Props> = ({ headline }) => {
  const { locale } = useRouter()
  const url = buildUrl(locale, headline.ctaLink.slug, headline.ctaLink._type)
  return (
    <div className="sectionContainer">
      <div className="sectionHero">
        <img
          src={urlFor(headline.mainImage)
            .width(1080)
            .height(450)
            .auto("format")
            .quality(75)
            .url()}
          width={1080}
          height={450}
          alt={headline.subImage.caption[locale]}
        />
      </div>
      <div className="sectionHeroCaption caption">
        {headline.mainImage.caption[locale]}
      </div>
      <div className="sectionContent">
        <div className="sectionInsetImage">
          <img
            src={urlFor(headline.subImage)
              .width(1080)
              .auto("format")
              .quality(75)
              .url()}
            width={340}
            height={510}
            className="sectionInset"
            alt={headline.subImage.caption[locale]}
          />
          <div className="caption">{headline.subImage.caption[locale]}</div>
        </div>
        <div>
          <div className="sectionTitleContainer">
            <div>
              {headline.title && <h2>{headline.title}</h2>}
              {headline.caption && <h3>{headline.caption}</h3>}
            </div>
          </div>
          <div className="sectionText">
            {headline.heading && <h4>{headline.heading}</h4>}
            {headline.body && <p>{headline.body}</p>}
          </div>
        </div>
      </div>
      <div className="sectionCtaContainer">
        <div className="sectionCtaHr"></div>
        <LinkTo href={url}>
          <h2 className="sectionCta">
            {headline.cta && <span>{headline.cta}&nbsp;</span>}
          </h2>
        </LinkTo>
      </div>
    </div>
  )
}
