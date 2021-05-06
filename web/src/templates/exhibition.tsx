import React, { useState } from 'react'
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
          artworkGridImage: mainImage {
            asset {
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
            }
          }
          artworkModalImage: mainImage {
            asset {
              gatsbyImageData(height: 670, formats: WEBP, placeholder: BLURRED)
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

  const [info, setInfo] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [modal, setModal] = useState(true)
  const [imageToShow, setImageToShow] = useState(0)
  
  const artwork = data && data.allSanityArtwork
  const exhibition = data && data.sanityExhibition
  const modalImage = artwork.edges[imageToShow].node

  const toggleInfo = () => {
    setInfo(false)
    setGallery(true)
  }
  const toggleGallery = () => {
    setInfo(true)
    setGallery(false)
  }
  const openModal = (index: number) => {
    setModal(false)
    setImageToShow(index)
  }
  const closeModal = () => {
    setModal(true)
  }
  
  return (
    <Layout
      heroImage={exhibition.mainImage.asset.gatsbyImageData}
      heroImageCaption={exhibition.mainImage.caption}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{exhibition.title.en}</h1>
            <p className="subTitle">{exhibition.dateStart} to {exhibition.dateEnd}</p>
            <ul className="galleryMenu">
              <li onClick={toggleInfo} className={info ? "" : "selected"}>Overview</li>
              <li onClick={toggleGallery} className={info ? "selected" : ""}>Works</li>
            </ul>
            <div className={info ? "hidden galleryInfo" : "galleryInfo"} >
              {exhibition.body._rawEn && <PortableText blocks={exhibition.body._rawEn} />}
            </div>
          </div>
        </div>
        <div className={gallery ? "hidden galleryImageGrid" : "galleryImageGrid"}>
          {artwork.edges.map((artworks: any, index: number) => (
            <div style={{margin: 0}} key={artworks.node.id} onClick={() => openModal(index)}>
              <GatsbyImage 
                image={artworks.node.artworkGridImage.asset.gatsbyImageData}
                alt={`${artworks.node.artist}, ${artworks.node.title.en}, ${artworks.node.date}`}
                className="gridImage"
              />
              <div className="gridCaption">{artworks.node.artist}</div>
              <div className="gridCaption"><em>{artworks.node.title.en}</em> {index}</div>
            </div>
          ))}
        </div>
        <div><p className="backLink"><Link to="/exhibitions/">Back to Exhibitions</Link></p></div>
        <div className={modal ? "modalContainer hideModal" : "modalContainer"} onClick={closeModal}>
          <div className="btnPrev">
            <img
              alt="Previous image"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3E%3Cpath d='M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z' fill='%234C4C4C'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </div>
          <div className="btnNext">
            <img
              alt="Next image"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' %3E%3Cpath d='M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z' fill='%234C4C4C'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </div>
          <div className="modalImageContiner">
            <GatsbyImage 
              image={modalImage.artworkModalImage.asset.gatsbyImageData}
              alt={`${modalImage.artist}, ${modalImage.title.en}, ${modalImage.date}`}
            />
            <p className="modalCaption">
              <em>{modalImage.title.en}</em>, {modalImage.artist}
            </p>
            <p className="modalCaption">
              {modalImage.medium.en}, {modalImage.price}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ExhibitionPage
