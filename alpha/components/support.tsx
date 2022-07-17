import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { FriendForm } from "components/friendForm"
import { Layout } from "components/layout"
import { SidebarComponent } from "components/sidebarComponent"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/support.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export function Support({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings,
}: Props) {
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
  return (
    <Layout
      caption=""
      heroImage={page.mainImage ?? settings.ogImage}
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
          {page.subtitle && (
            <h2 className={`${s.subtitle}`}>{page.subtitle}</h2>
          )}
          {page.body && (
            <div className={`${s.body}`}>
              <PortableText value={page.body} components={components} />
            </div>
          )}
          <FriendForm labels={labels} />
        </section>
        {/* TODO: the sidebar could be queried seperately so that typescripts knows it exists */}
        <SidebarComponent labels={labels} sidebar={page.sidebar!} />
      </div>
    </Layout>
  )
}
