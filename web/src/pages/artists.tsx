import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "../scss/artists.scss"

import Layout from "../components/layout"

const ArtistsPage = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityArtist.mainImage.asset.gatsbyImageData}
          heroImageCaption="Diane Rose, A Swoop of Swallows, 2020"
          heroTitle="Artists"
          heroCaption="Works available"
        >
          <section>
            <div className="imageGrid">
              {data.allSanityArtist.edges.map(artists => (
                <>
                  <Link 
                    to={`/artist/${artists.node.slug.current}/`}
                    style={{margin: 0}}
                    >
                    <div className="">
                      <GatsbyImage 
                        image={artists.node.mainImage.asset.gatsbyImageData}
                        alt=""
                      />
                      <div className="gridCaption">{artists.node.title}</div>
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
              gatsbyImageData(width: 400, height: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
        }
      }
    }
    sanityArtist(title: {eq: "Diane Rose"}) {
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

export default ArtistsPage
