import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import Sidebar from "components/sidebar"
import Localize from "components/localize"
import { PageProps } from "lib/interfaces"

const PageTemplate: FC<PageProps> = ({ page, exhibitions, events, posts }) => {
  const { locale } = useRouter()
  const blocks = locale === "cy" && page.body.cy ? page.body.cy : page.body.en
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          {page.title.en &&
            <h1><Localize data={page.title} /></h1>
          }
          {page.subtitle.en &&
            <p className="subTitle"><Localize data={page.subtitle} /></p>
          }
          {page.body.en && (
            <PortableText value={blocks} components={components} />
          )}
        </div>
        <Sidebar events={events} exhibitions={exhibitions} posts={posts} />
      </div>
    </section>
  )
}
export default PageTemplate
