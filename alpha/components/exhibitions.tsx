import { Fragment, useState } from "react"
import { useRouter } from "next/router"
import { ExhibitionPreview } from "components/exhibitionPreview"
import { Layout } from "components/layout"
import { PastExhibitionsList } from "components/pastExhibitionsList"
import {
  Image,
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/exhibitions.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export function Exhibitions({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings,
}: Props) {
  const [pastExhibitionsPerPage, setPastExhibitionsPerPage] = useState(9)
  const { locale } = useRouter() as TRouter
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${
      page.slug
    }`,
    ogImage: page.ogImage,
  }
  const handleShowMoreExhibitions = () => {
    setPastExhibitionsPerPage(
      (prevExhibitionsPerPage) => prevExhibitionsPerPage + 3
    )
  }
  let exhibitionHero: Image = settings.ogImage
  if (page.pastExhibitions && page.pastExhibitions[0]) {
    exhibitionHero = page.pastExhibitions[0].mainImage
  }
  if (page.futureExhibitions && page.futureExhibitions[0]) {
    exhibitionHero = page.futureExhibitions[0].mainImage
  }
  if (page.exhibitions && page.exhibitions[0]) {
    exhibitionHero = page.exhibitions[0].mainImage
  }
  const count =
    (page.exhibitions?.length ?? 0) + (page.futureExhibitions?.length ?? 0)
  return (
    <Layout
      caption={exhibitionHero?.caption ?? ""}
      heroImage={exhibitionHero}
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
          {page.subtitle && (
            <h2 className={`${s.subtitle}`}>
              {page.subtitle.trim().replace(".", "")}.
            </h2>
          )}
        </div>
      </header>
      <section
        className={`
        ${s.exhibitionGrid} ${count < 3 ? s.twoCols : ""} ${u.grid} ${u.mAuto}`}
      >
        {page.exhibitions &&
          page.exhibitions.map((exhibition, idx) => (
            <Fragment key={exhibition._id}>
              <ExhibitionPreview
                exhibition={exhibition}
                fallbackImage={settings.ogImage}
                heading={
                  idx === 0
                    ? page.exhibitions?.length === 1
                      ? labels[13].text
                      : labels[14].text
                    : undefined
                }
                idx={idx}
                label={labels[56].text}
                margin={page.futureExhibitions && idx >= 3 ? "6rem" : "2rem"}
                postsPerPage={10}
              />
            </Fragment>
          ))}
        {page.futureExhibitions &&
          page.futureExhibitions.map((exhibition, idx) => (
            <Fragment key={exhibition._id}>
              <ExhibitionPreview
                exhibition={exhibition}
                fallbackImage={settings.ogImage}
                heading={
                  idx === 0
                    ? page.futureExhibitions?.length === 1
                      ? labels[15].text
                      : labels[16].text
                    : undefined
                }
                idx={(page.exhibitions?.length ?? 0) + idx}
                label={labels[56].text}
                margin={(page.exhibitions?.length ?? 0) >= 3 ? "6rem" : "2rem"}
                postsPerPage={10}
              />
            </Fragment>
          ))}
      </section>
      {page.pastExhibitions && (
        <PastExhibitionsList
          exhibitions={page.pastExhibitions}
          fallbackImage={settings.ogImage}
          labels={labels}
          postsPerPage={pastExhibitionsPerPage}
        />
      )}
      {pastExhibitionsPerPage < (page.pastExhibitions?.length ?? 0) && (
        <button
          onClick={handleShowMoreExhibitions}
          className={`${s.loadMore} ${u.pointer}`}
          type="button"
        >
          {labels[84].text}
        </button>
      )}
    </Layout>
  )
}
