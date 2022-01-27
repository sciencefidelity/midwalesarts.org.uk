import Link from "next/link"

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebarContent">
      <h3>Latest News</h3>
      <ul className="sidebarMenu">
        {!!data.allSanityPost.edges &&
          data.allSanityPost.edges.map(
            link =>
              !!link && (
                <Link
                  href={`/news/${link.node.slug.en.current}/`}
                  key={link.node.id}
                >
                  <li>{link.node.title.en}</li>
                </Link>
              )
          )}
      </ul>
      <h3>Upcoming Events</h3>
      <ul className="sidebarMenu">
        {!!data.allSanityEvent.edges &&
          data.allSanityEvent.edges.map(
            link =>
              !!link && (
                <Link
                  to={`/events/${link.node.slug.en.current}/`}
                  key={link.node.id}
                >
                  <li>{link.node.title.en}</li>
                </Link>
              )
          )}
      </ul>
      <h3>Exhibitions</h3>
      <ul className="sidebarMenu">
        {!!data.allSanityExhibition.edges &&
          data.allSanityExhibition.edges.map(
            link =>
              !!link && (
                <Link
                  to={`/exhibitions/${link.node.slug.en.current}/`}
                  key={link.node.id}
                >
                  <li>{link.node.title.en}</li>
                </Link>
              )
          )}
      </ul>
      <h3>Weekly Clubs</h3>
      <ul className="sidebarMenu">
        <Link href="/workshops/">
          <li>Wednesdays: Home Ed Group</li>
        </Link>
        <Link href="/workshops/">
          <li>Wednesdays: Ceramics Club</li>
        </Link>
        <Link href="/workshops/">
          <li>Thursdays: Adult Pottery</li>
        </Link>
        <Link href="/workshops/">
          <li>Thursdays: After School Club</li>
        </Link>
        <Link href="/workshops/">
          <li>Saturdays: Family Workshop</li>
        </Link>
      </ul>
    </div>
  </aside>
)

const query = graphql`
  query Sidebar {
    allSanityPost(limit: 4, sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          slug {
            en {
              current
            }
          }
          title {
            en
          }
          id
        }
      }
    }
    allSanityEvent(
      filter: { date: { gte: "21-06-22" } }
      sort: { fields: date, order: ASC }
    ) {
      edges {
        node {
          title {
            en
          }
          slug {
            en {
              current
            }
          }
          id
        }
      }
    }
    allSanityExhibition(
      filter: { dateEnd: { gt: "21-06-22" } }
      sort: { order: ASC, fields: dateStart }
    ) {
      edges {
        node {
          id
          slug {
            en {
              current
            }
          }
          title {
            en
          }
          dateEnd
          dateStart
        }
      }
    }
  }
`

export default Sidebar