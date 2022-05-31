import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { sortWorkshops } from "lib/utils"
import { WorkshopPreview } from "components/workshopPreview"
import { Layout } from "components/layout"
import { SidebarComponent } from "components/sidebarComponent"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings
} from "lib/interfaces"
import s from "styles/workshops.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Workshops: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${page.slug}`,
    ogImage: page.ogImage
  }
  const workshops = sortWorkshops(page.workshops)
  return (
    <Layout
      heroImage={page.mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <section className={`${s.title}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle && <h2 className={`${s.subtitle}`}>
            {page.subtitle.trim().replace(".", "")}.
          </h2>}
          {page.workshops && (
            <WorkshopPreview
              eventData={workshops}
              heading=""
              marginTop={{ marginTop: "6rem" }}
            />
          )}
          {page.body && <div className={`${s.body}`}>
            <PortableText value={page.body} components={components} />
          </div>}
        </section>
        <SidebarComponent labels={labels} sidebar={page.sidebar} />
      </div>
    </Layout>
  )
}
