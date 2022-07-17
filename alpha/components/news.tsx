import { useState } from "react"
import { useRouter } from "next/router"
import { Layout } from "components/layout"
import { PostsList } from "components/postsList"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/news.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export function News({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings,
}: Props) {
  const [postsPerPage, setPostsPerPage] = useState(9)
  const { locale } = useRouter()
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
  const handleShowMorePosts = () => {
    setPostsPerPage((prevPostsPerPage) => prevPostsPerPage + 9)
  }
  return (
    <Layout
      caption={page.posts ? page.posts[0]?.title : ""}
      heroImage={page.posts ? page.posts[0]?.image : settings.ogImage}
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
      {page.posts && (
        <PostsList
          fallbackImage={settings.ogImage}
          label={`${labels[18].text.trim()} `}
          posts={page.posts}
          postsPerPage={postsPerPage}
        />
      )}
      {postsPerPage < (page.posts?.length ?? 0) && (
        <button
          onClick={handleShowMorePosts}
          type="button"
          className={`${s.loadMore} ${u.pointer}`}
        >
          {labels[84].text}
        </button>
      )}
    </Layout>
  )
}
