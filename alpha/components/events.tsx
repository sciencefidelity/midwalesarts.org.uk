import { FC } from "react"
import { useRouter } from "next/router"
import { EventPreview } from "components/eventPreview"
import { Layout } from "components/layout"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
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
  return (
    <Layout
      caption={page.events[0].title[locale]}
      heroImage={page.events[0].mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    >
      <section>
        <div className={`${s.sidebarContainer} ${u.grid}`}>
          <div className={`${s.portableContainer}`}>
            {page.title && <h1>{page.title}</h1>}
            {page.subtitle &&
              <p className={`${s.sidebarContainer} ${u.grid}`}>{page.subtitle}</p>
            }
          </div>
        </div>
        {page.events[0] !== undefined ? (
          <EventPreview
            heading={labels[9].text[locale]}
            eventData={page.events}
            marginTop={{ marginTop: "2rem" }}
            grid="pastEventsImageGrid"
          />
        ) : (
          <div
            className={`${s.sidebarContainer} ${u.grid}`}
            style={{ marginTop: "5rem" }}
          >
            <div className={`${s.portableContainer}`}>
              <p>{labels[10].text[locale]}</p>
            </div>
          </div>
        )}
        {/* {page.workshops && (
          <EventPreview
            heading={labels[11].text[locale]}
            eventData={page.workshops}
            marginTop={{ marginTop: "6rem" }}
            grid="pastEventsImageGrid"
          />
        )} */}
        {page.pastEvents && (
          <EventPreview
            heading={labels[12].text[locale]}
            eventData={page.pastEvents}
            marginTop={{ marginTop: "6rem" }}
            grid="pastEventsImageGrid"
          />
        )}
      </section>
    </Layout>
  )
}
