import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const Events = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout
        heroImage={data.eventsHero.edges[0].node.mainImage.asset.gatsbyImageData}
        heroImageCaption={`${data.eventsMain.edges[0].node.title.en}, ${data.eventsMain.edges[0].node.date}`}
      >
        <section>
          <div className="sidebarContainer">
            <div className="portableContainer">
              <h1>Events</h1>
              <p className="subTitle">Special events, workshops & performances.</p>
            </div>
          </div>
          <div className="imageGrid">
            {data.eventsMain.edges.map((events: any) => (
              <div key={events.node.id} style={{margin: 0}}>
                <Link
                  to={`/events/${events.node.slug.en.current}/`}
                >
                  <GatsbyImage 
                    image={events.node.mainImage.asset.gatsbyImageData}
                    alt=""
                    className="gridImage"
                  />
                  <div className="gridCaption">{events.node.title.en}</div>
                  <div className="gridCaption">{events.node.date}</div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )}
  />
)

const query = graphql `
  query eventsQuery {
    eventsMain: allSanityEvent(sort: {fields: date, order: DESC}) {
      edges {
        node {
          title {
            en
          }
          body {
            _rawEn(resolveReferences: {maxDepth: 10})
          }
          briteLink
          date(formatString: "dddd, MMMM Do YYYY")
          id
          mainImage {
            asset {
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
            }
          }
          slug {
            en {
              current
            }
          }
        }
      }
    }
    eventsHero: allSanityEvent(sort: {fields: date, order: DESC}) {
      edges {
        node {
          mainImage {
            asset {
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default Events