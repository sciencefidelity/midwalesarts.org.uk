import { FC } from "react"
import { useRouter } from "next/router"
import { sortWorkshops } from "lib/utils"
import { EventPreview } from "components/eventPreview"
import { Layout } from "components/layout"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings
} from "lib/interfaces"
import s from "styles/events.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Events: FC<Props> = ({
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
      caption={page.events[0].title}
      heroImage={page.events[0].mainImage}
      labels={labels}
      navigation={navigation}
      pageHead={pageHead}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle &&
            <h2 className={`${s.subtitle} ${u.grid}`}>{page.subtitle}</h2>
          }
        </div>
      </div>
      {page.events[0] !== undefined ? (
        <EventPreview
          heading={labels[9].text[locale]}
          eventData={page.events}
          marginTop={{ marginTop: "2rem" }}
        />
      ) : (
        <div
          className={`${s.container} ${u.grid}`}
          style={{ marginTop: "5rem" }}
        >
          <div className={`${s.title}`}>
            <h3 className={`${s.heading}`}>{labels[10].text[locale]}</h3>
          </div>
        </div>
      )}
      {page.workshops && (
        <EventPreview
          heading={labels[11].text[locale]}
          eventData={workshops}
          marginTop={{ marginTop: "6rem" }}
        />
      )}
      {page.pastEvents && (
        <EventPreview
          heading={labels[12].text[locale]}
          eventData={page.pastEvents}
          marginTop={{ marginTop: "6rem" }}
        />
      )}
    </Layout>
  )
}
