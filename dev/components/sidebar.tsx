import Link from "next/link"
import type { Event, Exhibition, Post } from "generated/schema"

const Sidebar = ({ events, exhibitions, posts }: {
  events: Event[]
  exhibitions: Exhibition[]
  posts: Post[]
}) => (
  <aside className="sidebar">
    <div className="sidebarContent">
      <h3>Latest News</h3>
      <ul className="sidebarMenu">
        {!!posts &&
          posts.map(
            post =>
              !!post && (
                <div key={post._id}>
                  <Link
                    href={`/news/${post.slug.en.current}/`}
                  >
                    <a><li>{post.title.en}</li></a>
                  </Link>
                </div>
              )
          )}
      </ul>
      <h3>Upcoming Events</h3>
      <ul className="sidebarMenu">
        {!!events &&
          events.map(
            event =>
              !!event && (
                <div key={event._id}>
                  <Link
                    href={`/events/${event.slug.en.current}/`}
                  >
                    <a><li>{event.title.en}</li></a>
                  </Link>
                </div>
              )
          )}
      </ul>
      <h3>Exhibitions</h3>
      <ul className="sidebarMenu">
        {!!exhibitions &&
          exhibitions.map(
            exhibition =>
              !!exhibition && (
                <div key={exhibition._id}>
                  <Link
                    href={`/exhibitions/${exhibition.slug.en.current}/`}
                  >
                    <a><li>{exhibition.title.en}</li></a>
                  </Link>
                </div>
              )
          )}
      </ul>
      <h3>Weekly Clubs</h3>
      <ul className="sidebarMenu">
        <Link href="/workshop">
          <a><li>Wednesdays: Home Ed Group</li></a>
        </Link>
        <Link href="/workshops">
          <a><li>Wednesdays: Ceramics Club</li></a>
        </Link>
        <Link href="/workshops">
          <a><li>Thursdays: Adult Pottery</li></a>
        </Link>
        <Link href="/workshops">
          <a><li>Thursdays: After School Club</li></a>
        </Link>
        <Link href="/workshops">
          <a><li>Saturdays: Family Workshop</li></a>
        </Link>
      </ul>
    </div>
  </aside>
)
export default Sidebar
