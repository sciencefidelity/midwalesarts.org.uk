import { FC, Fragment } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { buildUrl, urlFor } from "lib/utils"
import { ExhibitionDate } from "components/date"
import { ExhibitionPreview } from "components/exhibitionPreview"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings
} from "lib/interfaces"
import s from "styles/exhibitions.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Exhibitions: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${page.slug}`,
    ogImage: page.ogImage
  }
  let exhibitionHero: any = page.pastExhibitions[0].mainImage
  if (page.futureExhibitions[0]) exhibitionHero = page.futureExhibitions[0].mainImage
  if (page.exhibitions[0]) exhibitionHero = page.exhibitions[0].mainImage
  const count = page.exhibitions.length + page.futureExhibitions.length
  return (
    <Layout
      caption={exhibitionHero?.caption ? exhibitionHero.caption : null}
      heroImage={exhibitionHero?.asset ? exhibitionHero : settings.ogImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle &&
            <h2 className={`${s.subtitle}`}>
              {page.subtitle.trim().replace(".", "")}.
            </h2>
          }
        </div>
      </div>
      <div className={`${s.exhibitionGrid} ${count < 3 && s.twoCols} ${u.grid} ${u.mAuto}`}>
        {page.exhibitions[0] && page.exhibitions.map((exhibition, idx) =>
          <Fragment key={exhibition._id}>
            <ExhibitionPreview
              fallbackImage={settings.ogImage}
              heading={
                idx === 0 &&
                page.exhibitions.length === 1
                  ? labels[13].text
                  : labels[14].text
              }
              exhibition={exhibition}
            />
          </Fragment>
        )}
        {page.futureExhibitions[0] && page.futureExhibitions.map((exhibition, idx) =>
          <Fragment key={exhibition._id}>
            <ExhibitionPreview
              fallbackImage={settings.ogImage}
              heading={
                idx === 0 &&
                page.exhibitions.length === 1
                  ? labels[15].text
                  : labels[16].text
              }
              exhibition={exhibition}
            />
          </Fragment>
        )}
      </div>
      <div className={`${s.container} ${u.grid}`} style={{ marginTop: "6rem" }}>
        <div className={`${s.title}`}>
          <h3 className={`${s.heading}`}>{labels[17].text}</h3>
        </div>
      </div>
      <div className={`${s.exhibitionGrid} ${u.grid}`}>
        {page.pastExhibitions && page.pastExhibitions.map(exhibition =>
          exhibition && (
            <div key={exhibition._id} style={{ margin: 0 }}>
              <LinkTo
                href={buildUrl(locale, exhibition.slug, exhibition._type)}
              >
                <Image
                  src={urlFor(exhibition.mainImage?.asset
                    ? exhibition.mainImage
                    : settings.ogImage)
                    .width(624)
                    .height(624)
                    .auto("format")
                    .quality(75)
                    .url()}
                  alt={exhibition.title}
                  width={2000}
                  height={2000}
                />
                <div className={`${s.caption} ${u.textRight}`}>
                  {exhibition.title}
                </div>
                <div className={`${s.caption} ${u.textRight}`}>
                  <ExhibitionDate
                    dateEnd={exhibition.dateEnd}
                    dateStart={exhibition.dateStart}
                  />
                </div>
              </LinkTo>
            </div>
          )
        )}
      </div>
    </Layout>
  )
}
