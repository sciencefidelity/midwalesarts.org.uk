import { FC, useEffect, useState } from "react"
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
  Settings
} from "lib/interfaces"
import s from "styles/news.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const News: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const [postsToShow, setPostsToShow] = useState([])
  const [postsPerPage, setPostsPerPage] = useState(12)
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${page.slug}`,
    ogImage: page.ogImage
  }

  function loopWithSlice(start, end) {
    const slicedPosts = page.posts.slice(start, end)
    setPostsToShow(slicedPosts)
  }

  useEffect(() => {
    loopWithSlice(0, postsPerPage)
  }, [postsPerPage])

  function handleShowMorePosts() {
    setPostsPerPage(prevPostsPerPage => prevPostsPerPage + 9)
  }

  return (
    <Layout
      caption={page.posts[0]?.title ? page.posts[0]?.title : null}
      heroImage={page.posts[0]?.image ? page.posts[0]?.image : settings.ogImage}
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
      <PostsList
        fallbackImage={settings.ogImage}
        label={labels[18].text.trim() + " "}
        posts={postsToShow}
      />
      {postsToShow.length < page.posts.length && <button
        onClick={handleShowMorePosts}
        className={`${s.loadMore} ${u.pointer}`}
      >
        {labels[84].text}
      </button>}
    </Layout>
  )
}
