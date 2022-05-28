import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Event, Exhibition, Post } from "lib/interfaces"
import s from "styles/sidebar.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  events?: Event[]
  exhibitions?: Exhibition[]
  posts?: Post[]
}
// TODO: Move all text to studio
// TODO: Create sidebar document in studo to change order
// TODO: Create workshops document in studio and map through them here
export const Sidebar: FC<Props> = ({ events, exhibitions, posts }) => {
  const { locale } = useRouter()
  return (
    <aside className={`${s.sidebar}`}>
      <div className={`${s.sidebarContent}`}>
        {/* <h3>{locale === "cy" ? "Y newyddion diweddaraf" : "Latest News"}</h3>
        <ul className="sidebarMenu">
          {posts && posts.map(post =>
            post && (
              <LinkTo href={buildUrl(locale, post.slug, post._type)} key={post._id}>
                {post.title && <li>{post.title}</li>}
              </LinkTo>
            )
          )}
        </ul>
        <h3>{locale === "cy" ? "Digwyddiadau i ddod" : "Upcoming Events"}</h3>
        <ul className="sidebarMenu">
          {events && events.map(event =>
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
          {exhibitions && exhibitions.map(exhibition =>
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

        </ul> */}
      </div>
    </aside>
  )
}
