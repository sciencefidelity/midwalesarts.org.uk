import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

export const query = graphql `
  query singleExhibitionQuery($title: String!) {
    allSanityArtwork(
      filter: {exhibition: {elemMatch: {title: {en: {eq: $title}}}}}
      sort: {fields: artist, order: ASC}
    ) {
      edges {
        node {
          id
          artist
          date
          dimensions
          mainImage {
            asset {
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
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
        caption
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`

const ExhibitionPage = ({ data }) => {
  const artwork = data && data.allSanityArtwork
  const exhibition = data && data.sanityExhibition
  return (
    <Layout
      heroImage={exhibition.mainImage.asset.gatsbyImageData}
      heroImageCaption={exhibition.mainImage.caption}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer artistBio">
            <h1>{exhibition.title.en}</h1>
            <p className="subTitle">{exhibition.dateStart} to {exhibition.dateEnd}</p>
            {exhibition.body._rawEn && <PortableText blocks={exhibition.body._rawEn} />}
          </div>
        </div>
        <div className="imageGrid">
          {artwork.edges.map((artworks: any) => (
            <div style={{margin: 0}} key={artworks.node.id}>
              <GatsbyImage 
                image={artworks.node.mainImage.asset.gatsbyImageData}
                alt={`${artworks.node.artist}, ${artworks.node.title.en}, ${artworks.node.date}`}
                className="gridImage"
              />
              <div className="gridCaption">{artworks.node.artist}</div>
              <div className="gridCaption"><em>{artworks.node.title.en}</em></div>
            </div>
          ))}
        </div>
        <div><p className="backLink"><Link to="/exhibitions/">Back to Exhibitions</Link></p></div>
      </section>
    </Layout>
  )
}

export default ExhibitionPage
