import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const News = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout
        heroImage={data.newsHero.edges[0].node.image.asset.gatsbyImageData}
        heroImageCaption={data.newsMain.edges[0].node.title.en}
      >
        <section>
          <div className="sidebarContainer">
            <div className="portableContainer">
              <h1>Latest News</h1>
              <p className="subTitle">What's happening at Mid Wales Arts.</p>
            </div>
          </div>
          <div className="imageGrid">
            {data.newsMain.edges.map((posts: any) => (
              <div key={posts.node.id} style={{margin: 0}}>
              <Link
                to={`/news/${posts.node.slug.en.current}/`}
                
              >
                  <GatsbyImage 
                    image={posts.node.image.asset.gatsbyImageData}
                    alt={posts.node.title.en}
                    className="gridImage"
                  />
                  <div className="gridCaption">{posts.node.title.en}</div>
                  <div className="gridCaption">{posts.node.publishedAt}</div>
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
  query newsQuery {
    newsMain: allSanityPost(sort: {fields: publishedAt, order: DESC}) {
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
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
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
    newsHero: allSanityPost(sort: {fields: publishedAt, order: DESC}) {
      edges {
        node {
          image {
            asset {
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default News