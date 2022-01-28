import { useRouter } from "next/router"
import type { Event, Page } from "generated/schema"
import EventPreview from "components/eventPreview"

const Events = ({
  page,
  pastEvents,
  recurringEvents,
  upcomingEvents
}: {
  page: Page
  pastEvents: Event[]
  recurringEvents: Event[]
  upcomingEvents: Event[]
}) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1>
            {locale == "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="sidebarContainer">
            {locale == "cy" && page.subtitle.cy
              ? page.subtitle.cy
              : page.subtitle.en}
          </p>
        </div>
      </div>
      {upcomingEvents[0] !== undefined ? (
        <EventPreview
          heading={locale === "cy" ? "Digwyddiadau i ddod" : "Upcoming Events"}
          eventData={upcomingEvents}
          marginTop={{ marginTop: `2rem` }}
          grid="pastEventsImageGrid"
        />
      ) : (
        <div className="sidebarContainer" style={{ marginTop: `5rem` }}>
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
          marginTop={{ marginTop: `6rem` }}
          grid="pastEventsImageGrid"
        />
      )}
      {pastEvents && (
        <EventPreview
          heading={
            locale === "cy" ? "Digwyddiadau'r Gorffennol" : "Past Events"
          }
          eventData={pastEvents}
          marginTop={{ marginTop: `6rem` }}
          grid="pastEventsImageGrid"
        />
      )}
    </section>
  )
}
export default Events
