import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const News = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPost.image.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <section>
            <div className="container">
              <h1>Latest news</h1>
              <p>What's happening at MWA</p>
            </div>
            <div className="imageGrid">
              {data.allSanityPost.edges.map(posts => (
                <>
                  <Link
                    to={`/news/${posts.node.slug.en.current}/`}
                    style={{margin: 0}}
                  >
                    <div>
                      <GatsbyImage 
                        image={posts.node.image.asset.gatsbyImageData}
                        alt=""
                      />
                      <div className="gridCaption">{posts.node.title.en}</div>
                      <div className="gridCaption">{posts.node.publishedAt}</div>
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
          publishedAt(formatString: "dddd, MMMM Do YYYY")
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
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

export default News