import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

import '../scss/artist.scss'

export const query = graphql `
  query singleArtistQuery($name: String!) {
    artworkList: allSanityArtwork(
      sort: {fields: date, order: DESC}
      filter: {artist: { eq: $name }}
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
    sanityArtist(title: { eq: $name }) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      disciplines {
        title {
          en
        }
      }
      id
      mainImage {
        caption
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
      title
    }
  }
`

const Artist = ({ data }) => {
  const [bio, setBio] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [modal, setModal] = useState(true)
  const [imageToShow, setImageToShow] = useState(0)

  const toggleBio = () => {
    setBio(false)
    setGallery(true)
  }
  const toggleGallery = () => {
    setBio(true)
    setGallery(false)
  }
  const openModal = (index: number) => {
    setModal(false)
    setImageToShow(index)
  }
  const closeModal = () => {
    setModal(true)
  }
  
  const artist = data.sanityArtist
  const artwork = data.artworkList
  const modalImage = artwork.edges[imageToShow].node
  
  return (
    <Layout
      heroImage={artist.mainImage.asset.gatsbyImageData}
      heroImageCaption={artist.mainImage.caption}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Artist</h1>
            <p className="subTitle">{artist.title}</p>
            <ul className="artistMenu">
              <li onClick={toggleGallery} className={bio ? "selected" : ""}>Works</li>
              <li onClick={toggleBio} className={bio ? "" : "selected"}>Biography</li>
            </ul>
            <div className={bio ? "hidden artistBio" : "artistBio"} >
              {artist.body._rawEn && <PortableText blocks={artist.body._rawEn} />}
            </div>
          </div>
        </div>
        <div className={gallery ? "hidden artistImageGrid" : "artistImageGrid"}>
          {artwork.edges.map((artworks: any, index: number) => (
            <div style={{margin: 0}} key={artworks.node.id} onClick={() => openModal(index)}>
              <GatsbyImage 
                image={artworks.node.artworkGridImage.asset.gatsbyImageData}
                alt={`${artworks.node.artist}, ${artworks.node.title.en}, ${artworks.node.date}`}
                className="gridImage"
              />
              <div className="gridCaption">{artworks.node.title.en} ({artworks.node.date})</div>
            </div>
          ))}
        </div>
        <div className={modal ? "modalContainer hideModal" : "modalContainer"} onClick={closeModal}>
          <div className="modalImageContiner">
            <GatsbyImage 
              image={modalImage.artworkModalImage.asset.gatsbyImageData}
              alt=""
            />
            <p className="modalCaption">
              <em>{modalImage.title.en}</em>, {modalImage.artist}, {modalImage.date}
            </p>
            <p className="modalCaption">
              {modalImage.medium.en}, {modalImage.dimensions}, £{modalImage.price}
            </p>
          </div>
        </div>
        <div><p className="backLink"><Link to="/artists/">Back to Artists</Link></p></div>
      </section>
    </Layout>
  )
}

export default Artist
