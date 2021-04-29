import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

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
      dateStart(formatString: "Do MMMM")
      dateEnd(formatString: "Do MMMM YYYY")
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
    >
      <section>
        <div className="container">
          <h1>{exhibition.title.en}</h1>
          <p>{exhibition.dateStart} to {exhibition.dateEnd}</p>
          {exhibition.body._rawEn && <PortableText blocks={exhibition.body._rawEn} />}
        </div>
        <div className="imageGrid">
          {artwork.edges.map(artworks => (
            <>
              <div style={{margin: 0}}>
                <GatsbyImage 
                  image={artworks.node.mainImage.asset.gatsbyImageData}
                  alt=""
                />
                <div className="gridCaption">{artworks.node.artist}</div>
                <div className="gridCaption"><em>{artworks.node.title.en}</em></div>
              </div>
            </>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default ExhibitionPage
