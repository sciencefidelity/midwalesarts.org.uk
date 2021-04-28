import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

export const query = graphql `
  query singleExhibitionQuery($title: String!) {
    allSanityArtwork(
      filter: {exhibition: {elemMatch: {title: {en: {eq: $title}}}}}
    ) {
      edges {
        node {
          id
          artist
          date
          dimensions
          mainImage {
            asset {
              gatsbyImageData(width: 400, height: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
          medium {
            en
          }
          price
          title {
            en
          }
        }
      }
    }
    sanityExhibition(title: {en: { eq: $title }}) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      dateEnd
      dateStart
      id
      title {
        en
      }
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

const ExhibitionPage = props => {
  const { data } = props
  const artwork = data && data.allSanityArtwork
  const exhibition = data && data.sanityExhibition
  return (
    <Layout
      heroImage={exhibition.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
      heroTitle="Exhibition"
      heroCaption={exhibition.title.en}
    >
      <section>
        <div className="imageGrid">
          {artwork.edges.map(artworks => (
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
  )
}

export default ExhibitionPage
