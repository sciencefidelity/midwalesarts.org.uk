import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Events = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityEvent.mainImage.asset.gatsbyImageData}
          heroImageCaption="Day of the Dead Halloween Masks with Megan Elinor"
          heroTitle="Videos"
          heroCaption="Watch & Learn"
        >
          <section>
            <div className="imageGrid">
              {data.allSanityEvent.edges.map(events => (
                <>
                  <div>
                    <GatsbyImage 
                      image={events.node.mainImage.asset.gatsbyImageData}
                      alt=""
                    />
                    <div className="artistName">{events.node.title.en}</div>
                    <div className="artistName">{events.node.date}</div>
                  </div>
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