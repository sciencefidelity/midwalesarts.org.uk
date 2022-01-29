import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import type { Event, Exhibition, Page, Post } from "generated/schema"
import Sidebar from "components/sidebar"

const PageTemplate = ({
  page,
  exhibitions,
  events,
  posts
}: {
  page: Page
  events: Event[]
  exhibitions: Exhibition[]
  posts: Post[]
}) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1>
            {locale === "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="subTitle">
            {locale === "cy" && page.subtitle.cy
              ? page.subtitle.cy
              : page.subtitle.en}
          </p>
          {page.body.en && (
            <BlockContent
              blocks={
                locale === "cy" && page.body.cy ? page.body.cy : page.body.en
              }
              {...sanityClient.config()}
            />
          )}
        </div>
        <Sidebar events={events} exhibitions={exhibitions} posts={posts} />
      </div>
    </section>
  )
}
export default PageTemplate
