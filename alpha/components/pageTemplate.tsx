import { FC } from "react"
import Sidebar from "components/sidebar"
import PortableText from "components/portableText"
import Localize from "components/localize"
import { PageProps } from "lib/interfaces"

const PageTemplate: FC<PageProps> = ({ page, exhibitions, events, posts }) => {
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
            <PortableText blocks={page.body} />
          )}
        </div>
        <Sidebar events={events} exhibitions={exhibitions} posts={posts} />
      </div>
    </section>
  )
}
export default PageTemplate
