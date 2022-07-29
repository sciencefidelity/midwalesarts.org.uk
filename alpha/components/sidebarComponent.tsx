import { useRouter } from "next/router"
import { dayToNumber, nextDate, sortWorkshops } from "lib/dateHelpers"
import { buildURL } from "lib/utils"
import { SidebarEventDate, SidebarExhibitionDate } from "components/date"
import { LinkTo } from "components/linkTo"
import { Label, Sidebar } from "lib/interfaces"
import s from "styles/sidebar.module.scss"

interface Props {
  labels: Label[]
  sidebar: Sidebar
}
// TODO: Create sidebar document in studo to change order
export function SidebarComponent({ labels, sidebar }: Props) {
  const { locale = "en" } = useRouter() as TRouter
  const workshops = sortWorkshops(sidebar.workshops)
  return (
    <aside className={`${s.sidebar}`}>
      <div className={`${s.sidebarContent}`}>
        <h3 className={`${s.h3}`}>{labels[20].text}</h3>
        <ul className={`${s.sidebarMenu}`}>
          {sidebar.events &&
            sidebar.events.map(
              (event) =>
                event && (
                  <LinkTo
                    href={`/${buildURL(locale, event.slug, event._type)}`}
                    key={event._id}
                  >
                    <li className={`${s.listItem}`}>
                      {event.date && <SidebarEventDate date={event.date} />}
                      <br />
                      {event.title && (
                        <h4 className={`${s.listHeading}`}>{event.title}</h4>
                      )}
                    </li>
                  </LinkTo>
                )
            )}
        </ul>
        <h3 className={`${s.h3}`}>{labels[21].text}</h3>
        <ul className={`${s.sidebarMenu}`}>
          {sidebar.exhibitions &&
            sidebar.exhibitions.map(
              (exhibition) =>
                exhibition && (
                  <LinkTo
                    href={`/${buildURL(
                      locale,
                      exhibition.slug,
                      exhibition._type
                    )}`}
                    key={exhibition._id}
                  >
                    <li className={`${s.listItem}`}>
                      {exhibition.dateStart && (
                        <SidebarExhibitionDate
                          dateEnd={exhibition.dateEnd}
                          dateStart={exhibition.dateStart}
                        />
                      )}
                      <br />
                      {exhibition.title && (
                        <h4 className={`${s.listHeading}`}>
                          {exhibition.title}
                        </h4>
                      )}
                    </li>
                  </LinkTo>
                )
            )}
        </ul>
        <h3 className={`${s.h3}`}>{labels[22].text}</h3>
        <ul className={`${s.sidebarMenu}`}>
          {workshops &&
            workshops.map(
              (workshop) =>
                workshop && (
                  <LinkTo
                    href={`/${buildURL(locale, workshop.slug, workshop._type)}`}
                    key={workshop._id}
                  >
                    <li className={`${s.listItem}`}>
                      <SidebarEventDate
                        date={nextDate(
                          dayToNumber(workshop.day),
                          workshop.frequency
                        )}
                      />
                      {workshop.title && (
                        <h4 className={`${s.listHeading}`}>{workshop.title}</h4>
                      )}
                    </li>
                  </LinkTo>
                )
            )}
        </ul>
        <h3 className={`${s.h3}`}>{labels[19].text}</h3>
        <ul className={`${s.sidebarMenu}`}>
          {sidebar.posts &&
            sidebar.posts.map(
              (post) =>
                post && (
                  <LinkTo
                    href={`/${buildURL(locale, post.slug, post._type)}`}
                    key={post._id}
                  >
                    <li className={`${s.listItem}`}>
                      {post.title && (
                        <h4 className={`${s.listHeading}`}>{post.title}</h4>
                      )}
                    </li>
                  </LinkTo>
                )
            )}
        </ul>
      </div>
    </aside>
  )
}
