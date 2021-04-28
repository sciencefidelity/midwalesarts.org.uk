import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
                  <Link
                    to={`/video/${videos.node.slug.en.current}/`}
                    style={{margin: 0}}
                  >
                    <div>
                      <GatsbyImage 
                        image={videos.node.mainImage.asset.gatsbyImageData}
                        alt=""
                      />
                      <div className="gridCaption">{videos.node.title.en}</div>
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
          slug {
            en {
              current
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