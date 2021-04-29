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
          heroImage={data.sanityEvent.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <section>
            <div className="container">
              <h1>Events</h1>
              <p>Workshops & performances</p>
            </div>
            <div className="imageGrid">
              {data.allSanityEvent.edges.map(events => (
                <>
                  <Link
                    to={`/event/${events.node.slug.en.current}/`}
                    style={{margin: 0}}
                  >
                    <div>
                      <GatsbyImage 
                        image={events.node.mainImage.asset.gatsbyImageData}
                        alt=""
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
              gatsbyImageData(width: 600, height: 600, formats: WEBP, placeholder: BLURRED)
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
    sanityEvent {
      mainImage {
        asset {
          gatsbyImageData(width: 1440, placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  }
`

export default Events