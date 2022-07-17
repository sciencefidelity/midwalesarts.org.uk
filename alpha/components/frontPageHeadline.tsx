import { useRouter } from "next/router"
import { buildURL } from "lib/utils"
import { HeadlineHeroImage } from "components/headlineHeroImage"
import { HeadlineInsetImage } from "components/headlineInsetImage"
import { LinkTo } from "components/linkTo"
import { Headline, LocaleString, Settings } from "lib/interfaces"
import s from "styles/home.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  headline: Headline
  settings: Settings
}

export function FrontPageHeadline({ headline, settings }: Props) {
  const { locale = "en" } = useRouter() as TRouter
  const url = buildURL(locale, headline.ctaLink.slug, headline.ctaLink._type)
  const key: keyof LocaleString = locale === "cy" ? "cy" : "en"
  return (
    <div className={`${s.sectionContainer} ${u.relative} ${u.mAuto}`}>
      <div className={`${s.sectionHero}`}>
        <HeadlineHeroImage
          alt={headline.subImage.caption ? headline.subImage.caption[key] : ""}
          image={
            headline.mainImage?.asset ? headline.mainImage : settings.ogImage
          }
        />
      </div>
      <div className={`${s.sectionHeroCaption} ${u.absolute} ${u.caption}`}>
        {headline.mainImage.caption && headline.mainImage.caption[key]}
      </div>
      <div className={`${s.sectionContent} ${u.flex} ${u.relative}`}>
        <div className={`${s.sectionInsetImage}`}>
          <HeadlineInsetImage
            alt={
              headline.subImage.caption ? headline.subImage.caption[key] : ""
            }
            image={
              headline.subImage?.asset ? headline.subImage : settings.ogImage
            }
          />
          <div className={`${s.sectionInsetCaption} ${u.caption}`}>
            {headline.subImage.caption && headline.subImage.caption[key]}
          </div>
        </div>
        <div>
          <div
            className={`${s.sectionTitleContainer} ${u.block} ${u.textRight}`}
          >
            <div className={`${s.sectionTitle} ${u.inlineBlock}`}>
              {headline.title && (
                <h2 className={`${s.h2} ${u.uppercase}`}>
                  {headline.title.trim()}
                </h2>
              )}
              {headline.caption && (
                <h3 className={`${s.h3}`}>
                  {headline.caption.trim().replace(".", "")}
                </h3>
              )}
            </div>
          </div>
          <div className={`${s.sectionText}`}>
            {headline.heading && <h4>{headline.heading.trim()}</h4>}
            {headline.body && <p>{headline.body}</p>}
          </div>
        </div>
      </div>
      <div className={`${s.sectionCtaContainer}`}>
        <div className={`${s.sectionCtaHr} ${u.absolute}`} />
        <LinkTo href={url} tabIndex={-1}>
          <h2
            className={`${s.sectionCta} ${u.relative} ${u.textRight}`}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
          >
            {headline.cta && <span>{headline.cta.trim()}&nbsp;</span>}
          </h2>
        </LinkTo>
      </div>
    </div>
  )
}
