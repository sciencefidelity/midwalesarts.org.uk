import { FC, useState } from "react"
import { useRouter } from "next/router"
import { sortWorkshops } from "lib/dateHelpers"
import { EventPreview } from "components/eventPreview"
import { Layout } from "components/layout"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/events.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
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
  settings,
}) => {
  const [pastEventsPerPage, setPastEventsPerPage] = useState(6)
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
  const workshops = sortWorkshops(page.workshops)
  const handleShowMoreEvents = () => {
    setPastEventsPerPage((prevEventsPerPage) => prevEventsPerPage + 9)
  }
  return (
    <Layout
      caption={page.events[0]?.title ? page.events[0].title : null}
      heroImage={
        page.events[0]?.mainImage?.asset
          ? page.events[0].mainImage
          : settings.ogImage
      }
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
          {page.subtitle && (
            <h2 className={`${s.subtitle} ${u.grid}`}>
              {page.subtitle.trim().replace(".", "")}.
            </h2>
          )}
        </div>
      </div>
      {page.events[0] !== undefined ? (
        <EventPreview
          heading={labels[9].text}
          eventData={page.events}
          fallbackImage={settings.ogImage}
          marginTop={{ marginTop: "2rem" }}
          postsPerPage={100}
        />
      ) : (
        <div
          className={`${s.container} ${u.grid}`}
          style={{ marginTop: "5rem" }}
        >
          <div className={`${s.title}`}>
            <h3 className={`${s.heading}`}>{labels[10].text}</h3>
          </div>
        </div>
      )}
      {page.workshops && (
        <EventPreview
          heading={labels[11].text}
          eventData={workshops}
          fallbackImage={settings.ogImage}
          marginTop={{ marginTop: "6rem" }}
          postsPerPage={100}
          top={false}
        />
      )}
      {page.pastEvents[0] && (
        <EventPreview
          heading={labels[12].text}
          eventData={page.pastEvents}
          fallbackImage={settings.ogImage}
          marginTop={{ marginTop: "6rem" }}
          postsPerPage={pastEventsPerPage}
          top={false}
        />
      )}
      {pastEventsPerPage < page.pastEvents.length && (
        <button
          onClick={handleShowMoreEvents}
          className={`${s.loadMore} ${u.pointer}`}
        >
          {labels[84].text}
        </button>
      )}
    </Layout>
  )
}
