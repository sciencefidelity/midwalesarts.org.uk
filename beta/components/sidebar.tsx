import { FC } from "react"
import { useRouter } from "next/router"
import Link from "components/link"
import Localize from "components/localize"
import { SidebarProps } from "lib/interfaces"
// TODO: Move all text to studio
// TODO: Create sidebar document in studo to change order
// TODO: Create workshops document in studio and map through them here
const Sidebar: FC<SidebarProps> = ({ events, exhibitions, posts }) => {
  const { locale } = useRouter()
  return (
    <aside className="sidebar">
      <div className="sidebarContent">
        <h3>{locale === "cy" ? "Y newyddion diweddaraf" : "Latest News"}</h3>
        <ul className="sidebarMenu">
          {posts && posts.map(post =>
            post && (
              <Link href={`/news/${post.slug.en.current}/`} key={post._id}>
                <li>{post.title && <Localize data={post.title} />}</li>
              </Link>
            )
          )}
        </ul>
        <h3>{locale === "cy" ? "Digwyddiadau i ddod" : "Upcoming Events"}</h3>
        <ul className="sidebarMenu">
          {events && events.map(event =>
            event && (
              <Link href={`/events/${event.slug.en.current}/`} key={event._id}>
                <li>
                  {event.title && <Localize data={event.title} />}
                </li>
              </Link>
            )
          )}
        </ul>
        <h3>{locale === "cy" ? "Arddangosfeydd" : "Exhibitions"}</h3>
        <ul className="sidebarMenu">
          {exhibitions && exhibitions.map(exhibition =>
            exhibition && (
              <Link
                href={`/exhibitions/${exhibition.slug.en.current}/`}
                key={exhibition._id}
              >
                <li>
                  {exhibition.title && <Localize data={exhibition.title} />}
                </li>
              </Link>
            )
          )}
        </ul>
        <h3>{locale === "cy" ? "Clybiau Wythnosol" : "Weekly Clubs"}</h3>
        <ul className="sidebarMenu">
          <Link href="/workshop">
            <li>{locale === "cy"
              ? "Dydd Mercher: Home Ed Group"
              : "Wednesdays: Home Ed Group"}
            </li>
          </Link>
          <Link href="/workshops">
            <li>{locale === "cy"
              ? "Dydd Mercher: Clwb Serameg"
              : "Wednesdays: Ceramics Club"}
            </li>
          </Link>
          <Link href="/workshops">
            <li>{locale === "cy"
              ? "Dydd Iau: Crochenwaith Oedolion"
              : "Thursdays: Adult Pottery"}
            </li>
          </Link>
          <Link href="/workshops">
            <li>{locale === "cy"
              ? "Dydd Iau: Clwb ar ôl Ysgol"
              : "Thursdays: After School Club"}
            </li>
          </Link>
          <Link href="/workshops">
            <li>{locale === "cy"
              ? "Dydd Sadwrn: Gweithdy Teulu"
              : "Saturdays: Family Workshop"}
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  )
}
export default Sidebar
