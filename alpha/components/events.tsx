// TODO: move titles and placeholders into studio
// TODO: handle missing events
import { FC } from "react"
import { useRouter } from "next/router"
import EventPreview from "components/eventPreview"
import Localize from "components/localize"
import { EventsProps } from "lib/interfaces"

const Events: FC<EventsProps> = ({
  page, pastEvents, recurringEvents, upcomingEvents
}) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          {page.title &&
            <h1><Localize data={page.title} /></h1>
          }
          {page.subtitle &&
            <p className="sidebarContainer">
              <Localize data={page.subtitle} />
            </p>
          }
        </div>
      </div>
      {upcomingEvents[0] !== undefined ? (
        <EventPreview
          heading={locale === "cy" ? "Digwyddiadau i ddod" : "Upcoming Events"}
          eventData={upcomingEvents}
          marginTop={{ marginTop: "2rem" }}
          grid="pastEventsImageGrid"
        />
      ) : (
        <div className="sidebarContainer" style={{ marginTop: "5rem" }}>
          <div className="portableContainer">
            <p>
              {locale === "cy"
                ? "Mwy o ddigwyddiadau yn dod yn fuan."
                : "More events coming soon."}
            </p>
          </div>
        </div>
      )}
      {recurringEvents && (
        <EventPreview
          heading={
            locale === "cy" ? "Digwyddiadau Rheolaidd" : "Regular Events"
          }
          eventData={recurringEvents}
          marginTop={{ marginTop: "6rem" }}
          grid="pastEventsImageGrid"
        />
      )}
      {pastEvents && (
        <EventPreview
          heading={
            locale === "cy" ? "Digwyddiadau'r Gorffennol" : "Past Events"
          }
          eventData={pastEvents}
          marginTop={{ marginTop: "6rem" }}
          grid="pastEventsImageGrid"
        />
      )}
    </section>
  )
}
export default Events
