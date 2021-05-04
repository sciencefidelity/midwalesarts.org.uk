import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../scss/artists.scss'

import Layout from '../components/layout'

const ArtistsPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout
        heroImage={data.sanityArtist.mainImage.asset.gatsbyImageData}
        heroImageCaption={data.sanityArtist.mainImage.caption}
      >
        <section>
          <div className="sidebarContainer">
            <div className="portableContainer">
              <h1>Artists</h1>
              <p className="subTitle">Works available to see and buy.</p>
            </div>
          </div>
          <div className="imageGrid">
            {data.allSanityArtist.edges.map((artists: any) => (
              <Link 
                to={`/artists/${artists.node.slug.current}/`}
                style={{margin: 0}}
                key={artists.node.id}
              >
                <div>
                  <GatsbyImage 
                    image={artists.node.mainImage.asset.gatsbyImageData}
                    alt=""
                  />
                  <div className="gridCaption">{artists.node.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    )}
  />
)

const query = graphql `
  query ArtistsQuery {
    allSanityArtist(sort: {fields: title, order: ASC}) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          body {
            _rawEn(resolveReferences: {maxDepth: 10})
          }
          mainImage {
            asset {
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
            }
          }
          disciplines {
            title {
              en
            }
          }
        }
      }
    }
    sanityArtist(title: {eq: "Diane Rose"}) {
      mainImage {
        caption
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default ArtistsPage
