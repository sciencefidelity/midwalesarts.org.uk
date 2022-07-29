import { useState } from "react"
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

export function Videos({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings,
}: Props) {
  const [videosPerPage, setVideosPerPage] = useState(12)
  const { locale = "en" } = useRouter()
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
  const handleShowMoreVideos = () => {
    setVideosPerPage((prevVideosPerPage) => prevVideosPerPage + 3)
  }
  return (
    <Layout
      caption={page.videos ? page.videos[0]?.title : ""}
      heroImage={
        page.videos && page.videos[0]?.mainImage?.asset
          ? page.videos[0].mainImage
          : settings.ogImage
      }
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
          {page.subtitle && (
            <h2 className={`${s.subtitle}`}>
              {page.subtitle.trim().replace(".", "")}.
            </h2>
          )}
        </div>
      </div>
      {page.videos && (
        <VideosList
          fallbackImage={settings.ogImage}
          label={`${labels[18].text.trim()} `}
          postsPerPage={videosPerPage}
          videos={page.videos}
        />
      )}
      {videosPerPage < (page.videos?.length ?? 0) && (
        <button
          onClick={handleShowMoreVideos}
          type="button"
          className={`${s.loadMore} ${u.pointer}`}
        >
          {labels[84].text}
        </button>
      )}
    </Layout>
  )
}
