import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Videos = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityVideo.mainImage.asset.gatsbyImageData}
          heroImageCaption="Day of the Dead Halloween Masks with Megan Elinor"
          heroTitle="Videos"
          heroCaption="Watch & Learn"
        >
          <section>
            <div className="imageGrid">
              {data.allSanityVideo.edges.map(videos => (
                <>
                  <div>
                    <GatsbyImage 
                      image={videos.node.mainImage.asset.gatsbyImageData}
                      alt=""
                    />
                    <div className="artistName">{videos.node.title.en}</div>
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
  query videosQuery {
    allSanityVideo(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          id
          title {
            en
          }
          mainImage {
            asset {
              gatsbyImageData(width: 600, height: 600, formats: WEBP, placeholder: BLURRED)
            }
          }
        }
      }
    }
    sanityVideo {
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Videos