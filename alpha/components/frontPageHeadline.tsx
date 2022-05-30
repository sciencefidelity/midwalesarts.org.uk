import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl, urlFor } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Headline } from "lib/interfaces"
import s from "styles/home.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  headline: Headline
}

export const FrontPageHeadline: FC<Props> = ({ headline }) => {
  const { locale } = useRouter()
  const url = buildUrl(locale, headline.ctaLink.slug, headline.ctaLink._type)
  return (
    <div className={`${s.sectionContainer} ${u.relative} ${u.mAuto}`}>
      <div className={`${s.sectionHero}`}>
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
      <div className={`${s.sectionHeroCaption} ${u.absolute} ${u.caption}`}>
        {headline.mainImage.caption[locale]}
      </div>
      <div className={`${s.sectionContent} ${u.flex}`}>
        <div className={`${s.sectionInsetImage}`}>
          <img
            src={urlFor(headline.subImage)
              .width(1080)
              .auto("format")
              .quality(75)
              .url()}
            width={340}
            height={510}
            className={`${s.sectionInset} ${u.wFull} ${u.cover}`}
            alt={headline.subImage.caption[locale]}
          />
          <div className={`${s.sectionInsetCaption} ${u.caption}`}>
            {headline.subImage.caption[locale]}
          </div>
        </div>
        <div>
          <div
            className={`${s.sectionTitleContainer} ${u.block} ${u.textRight}`}
          >
            <div className={`${s.sectionTitle} ${u.inlineBlock}`}>
              {headline.title && <h2 className={`${s.h2} ${u.uppercase}`}>
                {headline.title.trim()}
              </h2>}
              {headline.caption && <h3 className={`${s.h3}`}>
                {headline.caption.trim().replace(".", "")}
              </h3>}
            </div>
          </div>
          <div className={`${s.sectionText}`}>
            {headline.heading && <h4>{headline.heading.trim()}</h4>}
            {headline.body && <p>{headline.body}</p>}
          </div>
        </div>
      </div>
      <div className={`${s.sectionCtaContainer}`}>
        <div className={`${s.sectionCtaHr} ${u.absolute}`}></div>
        <LinkTo href={url}>
          <h2 className={`${s.sectionCta} ${u.relative} ${u.textRight}`}>
            {headline.cta && <span>{headline.cta.trim()}&nbsp;</span>}
          </h2>
        </LinkTo>
      </div>
    </div>
  )
}
