import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const ArtistPage = ({ pageContext }) => (
<>
  <StaticQuery
    query={query}
    render={data => (
      <Layout
        heroImage={pageContext.mainImage}
        heroImageCaption="&nbsp;"
        heroTitle={pageContext.name}
        heroCaption="&nbsp;"
      >
        <section>
          <div className="imageGrid">
            {data.allSanityArtwork.edges.map(artworks => (
              <>
                <div style={{margin: 0}}>
                  <GatsbyImage 
                    image={artworks.node.mainImage.asset.gatsbyImageData}
                    alt=""
                  />
                  <div className="gridCaption">{artworks.node.title.en}</div>
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
  query ArtistQuery {
    allSanityArtwork(filter: {artist: {eq: "Angela Thorpe"}}) {
      edges {
        node {
          artist
          date
          id
          mainImage {
            asset {
              gatsbyImageData(width: 400, height: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
          medium {
            en
          }
          price
          sold
          title {
            en
          }
        }
      }
    }
  }
`

export default ArtistPage
