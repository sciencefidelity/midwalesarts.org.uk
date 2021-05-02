import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import SidebarMenu from './sidebarMenu'

const Sidebar = () => (
  <StaticQuery
    query={query}
    render={data => (
      <aside className="sidebar">
        <div className="sidebarContent">
          <h3>Latest News</h3>
          <ul className="sidebarMenu">
            {data.allSanityPost.edges.map((link: any) => (
              <Link to={`/news/${link.node.slug.en.current}/`} key={link.node.id}>
                <li>{link.node.title.en}</li>
              </Link>
            ))}
          </ul>
          <h3>Upcoming Events</h3>
          <ul className="sidebarMenu">
            {data.allSanityEvent.edges.map((link: any) => (
              <Link to={`/news/${link.node.slug.en.current}/`} key={link.node.id}>
                <li>{link.node.title.en}</li>
              </Link>
            ))}
          </ul>
          <h3>Exhibitions</h3>
          <ul className="sidebarMenu">
            {data.allSanityExhibition.edges.map((link: any) => (
              <Link to={`/news/${link.node.slug.en.current}/`} key={link.node.id}>
                <li>{link.node.title.en}</li>
              </Link>
            ))}
          </ul>
        </div>
      </aside>
    )}
  />
)

const query = graphql `
  query sidebarQuery {
    allSanityPost(limit: 6, sort: {fields: publishedAt, order: DESC}) {
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
      filter: {date: {gte: "2021-05-02"}}
      sort: {fields: date, order: ASC}
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
      filter: {dateEnd: {gt: "2021-05-02"}}
      sort: {order: ASC, fields: dateStart}
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
