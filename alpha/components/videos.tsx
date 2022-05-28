import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { buildUrl, urlFor } from "lib/utils"
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
import s from "styles/videos.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Videos: FC<Props> = ({
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
      caption={page.videos[0].title[locale]}
      heroImage={page.videos[0].mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    >
      <div className={`${s.sidebarContainer} ${u.grid}`}>
        <div className={`${s.portableContainer}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle &&
            <p className={`${s.subTitle}`}>{page.subtitle}</p>
          }
        </div>
      </div>
      <div className={`${s.imageGrid} ${u.grid}`}>
        {page.videos && page.videos.map(video => video &&
          <div key={video._id} style={{ margin: 0 }}>
            <LinkTo href={buildUrl(locale, video.slug, video._type)}>
              <Image
                src={urlFor(video.mainImage)
                  .width(468)
                  .height(468)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={video.title}
                width={2000}
                height={2000}
              />
              {video.title &&
                <div className={`${s.gridCaption}`}>{video.title}</div>
              }
            </LinkTo>
          </div>
        )}
      </div>
    </Layout>
  )
}
