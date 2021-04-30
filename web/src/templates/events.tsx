import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const Events = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.allSanityEvent.edges[0].node.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <section>
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>Events</h1>
                <p className="subTitle">Special events, workshops & performances.</p>
              </div>
            </div>
            <div className="imageGrid">
              {data.allSanityEvent.edges.map(events => (
                <>
                  <Link
                    to={`/events/${events.node.slug.en.current}/`}
                    style={{margin: 0}}
                  >
                    <div>
                      <GatsbyImage 
                        image={events.node.mainImage.asset.gatsbyImageData}
                        alt=""
                        className="gridImage"
                      />
                      <div className="gridCaption">{events.node.title.en}</div>
                      <div className="gridCaption">{events.node.date}</div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </section>
        </Layout>
      )}
    />
  </>
)

const query = graphql `
  query eventsQuery {
    allSanityEvent(sort: {fields: date, order: DESC}) {
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
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
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
  }
`

export default Events