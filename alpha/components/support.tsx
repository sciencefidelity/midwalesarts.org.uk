import { FC } from "react"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { Layout } from "components/layout"
import { Sidebar } from "components/sidebar"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  Settings
} from "lib/interfaces"
import s from "styles/pages.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Support: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  return (
    <Layout
      caption={page.mainImage.caption}
      heroImage={page.mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    >
      <div className={`${s.sidebarContainer} ${u.grid}`}>
        <section className={`${s.portableContainer}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle && <p className={`${s.subTitle}`}>{page.subtitle}</p>}
          {page.body && <PortableText value={page.body} components={components} />}
        </section>
        <Sidebar />
      </div>
    </Layout>
  )
}
