import { useRouter } from "next/router"
import sanityClient from "@/lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import type { Page } from "@/generated/schema"
// import Sidebar from "@/components/sidebar"

const AboutPage = ({ page }: { page: Page }) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1>
            {locale === "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="subTitle">
            {locale === "cy" && page.subtitle.cy ? page.subtitle.cy : page.subtitle.en}
          </p>
          {page.body.en && (
            <BlockContent
              blocks={locale === "cy" && page.body.cy ? page.body.cy : page.body.en}
              {...sanityClient.config()}
            />
          )}
        </div>
{/*         <Sidebar /> */}
      </div>
    </section>
  )
}
export default AboutPage
