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
          heroImage={data.videosHero.edges[0].node.mainImage.asset.gatsbyImageData}
          heroImageCaption={`${data.videosMain.edges[0].node.title.en}`}
        >
          <section>
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>Videos</h1>
                <p className="subTitle">Watch & learn with our artists.</p>
              </div>
            </div>
            <div className="imageGrid">
              {data.videosMain.edges.map((videos: any) => (
                <div key={videos.node.id} style={{margin: 0}}>
                  <Link
                    to={`/videos/${videos.node.slug.en.current}/`}
                  >
                    <GatsbyImage 
                      image={videos.node.mainImage.asset.gatsbyImageData}
                      alt=""
                      className="gridImage"
                    />
                    <div className="gridCaption">{videos.node.title.en}</div>
                  </Link>
                </div>
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
    videosMain: allSanityVideo(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          id
          title {
            en
          }
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
    videosHero: allSanityVideo(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          mainImage {
            asset {
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default Videos
