import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl, sortWorkshops } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Sidebar } from "lib/interfaces"
import s from "styles/sidebar.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  sidebar: Sidebar
}
// TODO: Move all text to studio
// TODO: Create sidebar document in studo to change order
// TODO: Create workshops document in studio and map through them here
export const SidebarComponent: FC<Props> = ({ sidebar }) => {
  const { locale } = useRouter()
  // const { events, exhibitions, posts, workshops } = sidebar
  const workshops = sortWorkshops(sidebar.workshops)
  return (
    <aside className={`${s.sidebar}`}>
      <div className={`${s.sidebarContent}`}>
        <h3>{locale === "cy" ? "Y newyddion diweddaraf" : "Latest News"}</h3>
        <ul className="sidebarMenu">
          {sidebar.posts && sidebar.posts.map(post =>
            post && (
              <LinkTo href={buildUrl(locale, post.slug, post._type)} key={post._id}>
                {post.title && <li>{post.title}</li>}
              </LinkTo>
            )
          )}
        </ul>
        <h3>{locale === "cy" ? "Digwyddiadau i ddod" : "Upcoming Events"}</h3>
        <ul className="sidebarMenu">
          {sidebar.events && sidebar.events.map(event =>
            event && (
              <LinkTo
                href={buildUrl(locale, event.slug, event._type)}
                key={event._id}
              >
                {event.title && <li>{event.title}</li>}
              </LinkTo>
            )
          )}
        </ul>
        <h3>{locale === "cy" ? "Arddangosfeydd" : "Exhibitions"}</h3>
        <ul className="sidebarMenu">
          {sidebar.exhibitions && sidebar.exhibitions.map(exhibition =>
            exhibition && (
              <LinkTo
                href={`/exhibitions/${exhibition.slug}/`}
                key={exhibition._id}
              >
                {exhibition.title && <li>{exhibition.title}</li>}
              </LinkTo>
            )
          )}
        </ul>
        <h3>{locale === "cy" ? "Clybiau Wythnosol" : "Weekly Clubs"}</h3>
        <ul className="sidebarMenu">
          {workshops && workshops.map(workshop =>
            workshop && (
              <LinkTo href={buildUrl(locale, workshop.slug, workshop._type)} key={workshop._id}>
                {workshop.title && <li>{workshop.title}</li>}
              </LinkTo>
            )
          )}
        </ul>
      </div>
    </aside>
  )
}
