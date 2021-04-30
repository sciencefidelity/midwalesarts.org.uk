import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const Videos = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.allSanityVideo.edges[0].node.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <section>
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>Videos</h1>
                <p className="subTitle">Watch & learn with our artists.</p>
              </div>
            </div>
            <div className="imageGrid">
              {data.allSanityVideo.edges.map(videos => (
                <>
                  <Link
                    to={`/videos/${videos.node.slug.en.current}/`}
                    style={{margin: 0}}
                  >
                    <div>
                      <GatsbyImage 
                        image={videos.node.mainImage.asset.gatsbyImageData}
                        alt=""
                        className="gridImage"
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
      nodes {
        title {
          en
        }
      }
      edges {
        node {
          id
          title {
            en
          }
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

export default Videos
