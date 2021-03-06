import { FC, useState } from "react"
import { useRouter } from "next/router"
import { Layout } from "components/layout"
import { VideosList } from "components/videosList"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/videos.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
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
  const [videosPerPage, setVideosPerPage] = useState(12)
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${page.slug}`,
    ogImage: page.ogImage
  }
  const handleShowMoreVideos = () => {
    setVideosPerPage(prevVideosPerPage => prevVideosPerPage + 3)
  }
  return (
    <Layout
      caption={page.videos[0]?.title ? page.videos[0].title : null}
      heroImage={page.videos[0]?.mainImage?.asset
        ? page.videos[0].mainImage
        : settings.ogImage}
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
          {page.subtitle && <h2 className={`${s.subtitle}`}>
            {page.subtitle.trim().replace(".", "")}.
          </h2>}
        </div>
      </div>
      {page.videos[0] && <VideosList
        fallbackImage={settings.ogImage}
        label={labels[18].text.trim() + " "}
        postsPerPage={videosPerPage}
        videos={page.videos}
      />}
      {videosPerPage < page.videos.length && <button
        onClick={handleShowMoreVideos}
        className={`${s.loadMore} ${u.pointer}`}
      >
        {labels[84].text}
      </button>}
    </Layout>
  )
}
