import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const News = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPost.image.asset.gatsbyImageData}
          heroImageCaption="Day of the Dead Halloween Masks with Megan Elinor"
          heroTitle="Latest news"
          heroCaption="What's happening at MWA"
        >
          <section>
            <div className="imageGrid">
              {data.allSanityPost.edges.map(posts => (
                <>
                  <div>
                    <GatsbyImage 
                      image={posts.node.image.asset.gatsbyImageData}
                      alt=""
                    />
                    <div className="artistName">{posts.node.title.en}</div>
                    <div className="artistName">{posts.node.publishedAt}</div>
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
  query newsQuery {
    allSanityPost(sort: {fields: publishedAt, order: DESC}) {
      edges {
        node {
          body {
            _rawEn(resolveReferences: {maxDepth: 10})
          }
          id
          categories {
            title {
              en
            }
          }
          image {
            asset {
              gatsbyImageData(width: 400, height: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
          publishedAt(formatString: "\"dddd, MMMM Do YYYY\"")
          slug {
            en {
              current
            }
          }
          title {
            en
          }
        }
      }
    }
    sanityPost {
      image {
        asset {
          gatsbyImageData(sizes: "1440", formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

export default News