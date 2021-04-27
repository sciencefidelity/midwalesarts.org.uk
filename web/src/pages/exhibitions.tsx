import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "../scss/artists.scss"

import Layout from "../components/layout"

const Exhibitions = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityExhibition.mainImage.asset.gatsbyImageData}
          heroImageCaption="Diane Rose, A Swoop of Swallows, 2020"
          heroTitle="Exhibitions"
          heroCaption="Gallery, Barn, House"
        >
          <section>
            <div className="imageGrid">
              {data.allSanityExhibition.edges.map(exhibitions => (
                <>
                  <div>
                    <GatsbyImage 
                      image={exhibitions.node.mainImage.asset.gatsbyImageData}
                      alt=""
                    />
                    <div className="artistName">{exhibitions.node.title.en}</div>
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
  query ExhibitionQuery {
    allSanityExhibition {
      edges {
        node {
          title {
            en
          }
          slug {
            en {
              current
            }
          }
          mainImage {
            asset {
              gatsbyImageData(width: 400, height: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
          dateStart(formatString: "dddd, MMMM Do YYYY")
          dateEnd(formatString: "dddd, MMMM Do YYYY")
          id
          body {
            _rawEn
          }
        }
      }
    }
    sanityExhibition {
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Exhibitions
