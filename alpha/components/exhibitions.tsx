import { FC } from "react"
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
  return (
    <Layout
      caption={page.exhibitions[0].mainImage.caption}
      heroImage={page.exhibitions[0].mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    >
      <div className={`${s.sidebarContainer} ${u.grid}`}>
        <div className={`${s.portableContainer}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle && <p className={`${s.subTitle}`}>{page.subtitle}</p>}
        </div>
      </div>
      <div className={`${s.exhibitionPreviewGrid} ${u.flex} ${u.mAuto}`}>
        {page.exhibitions[0] && (page.exhibitions.length === 1
          ? <ExhibitionPreview
            heading={labels[13].text[locale]}
            exhibition={page.exhibitions[0]}
          />
          : <>
            <ExhibitionPreview
              heading={labels[14].text[locale]}
              exhibition={page.exhibitions[0]}
            />
            <ExhibitionPreview exhibition={page.exhibitions[1]} />
            {page.exhibitions[2] &&
              <ExhibitionPreview exhibition={page.exhibitions[2]} />
            }
          </>
        )}
        {page.futureExhibitions[0] && <>
          <ExhibitionPreview
            heading={labels[15].text[locale]}
            exhibition={page.futureExhibitions[0]}
          />
          {page.futureExhibitions[1] && <ExhibitionPreview
            heading={" "}
            exhibition={page.futureExhibitions[1]}
          />}
        </>}
      </div>
      <div className={`${s.sidebarContainer}`} style={{ marginTop: "6rem" }}>
        <div className={`${s.portableContainer}`}>
          <p>{labels[16].text[locale]}</p>
        </div>
      </div>
      <div className={`${s.exhibitionGrid} ${u.grid}`}>
        {page.pastExhibitions && page.pastExhibitions.map(exhibition =>
          exhibition && (
            <div key={exhibition._id} style={{ margin: 0 }}>
              <LinkTo href={buildUrl(locale, exhibition.slug, exhibition._type)}>
                <Image
                  src={urlFor(exhibition.mainImage)
                    .width(624)
                    .height(624)
                    .auto("format")
                    .quality(75)
                    .url()}
                  alt={exhibition.title}
                  width={2000}
                  height={2000}
                />
                <div className={`${s.gridCaption}`}>{exhibition.title}</div>
                <div className={`${s.gridCaption}`}>
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
