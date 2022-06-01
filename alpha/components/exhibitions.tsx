import { FC, Fragment } from "react"
import { useRouter } from "next/router"
import { ExhibitionPreview } from "components/exhibitionPreview"
import { Layout } from "components/layout"
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
      <header className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle &&
            <h2 className={`${s.subtitle}`}>
              {page.subtitle.trim().replace(".", "")}.
            </h2>
          }
        </div>
      </header>
      <section className={`
        ${s.exhibitionGrid} ${count < 3 && s.twoCols} ${u.grid} ${u.mAuto}`
      }>
        {page.exhibitions[0] && page.exhibitions.map((exhibition, idx) =>
          <Fragment key={exhibition._id}>
            <ExhibitionPreview
              fallbackImage={settings.ogImage}
              heading={
                idx === 0 &&
                (page.exhibitions.length === 1
                  ? labels[13].text
                  : labels[14].text)
              }
              exhibition={exhibition}
              label={labels[56].text}
              margin={page.futureExhibitions[0] && idx >= 3 ? "6rem" : "0"}
            />
          </Fragment>
        )}
        {page.futureExhibitions[0] && page.futureExhibitions.map((exhibition, idx) =>
          <Fragment key={exhibition._id}>
            <ExhibitionPreview
              fallbackImage={settings.ogImage}
              heading={
                idx === 0 &&
                (page.futureExhibitions.length === 1
                  ? labels[15].text
                  : labels[16].text)
              }
              exhibition={exhibition}
              label={labels[56].text}
              margin={page.exhibitions.length >= 3 ? "6rem" : "0"}
            />
          </Fragment>
        )}
      </section>
      <section className={`${s.exhibitionGrid} ${s.pastExhibitions} ${u.grid}`}>
        {page.pastExhibitions[0] && page.pastExhibitions.map((exhibition, idx) =>
          <Fragment key={exhibition._id}>
            <ExhibitionPreview
              fallbackImage={settings.ogImage}
              heading={idx === 0 && labels[17].text}
              exhibition={exhibition}
              label={labels[56].text}
            />
          </Fragment>
        )}
      </section>
    </Layout>
  )
}
