import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import PortableText from '../components/portableText'
import Modal from '../components/modal'

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
    artworkModal: allSanityArtwork(
      sort: {fields: date, order: DESC}
      filter: {artist: { eq: $name }}
    ) {
      edges {
        node {
          mainImage {
            asset {
              gatsbyImageData(width: 1280, formats: WEBP, placeholder: BLURRED)
            }
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
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
      title
    }
  }
`

const Artist = ({ data }) => {
  const [bio, setBio] = useState(true)
  const [image, setImage] = useState(false)

  const toggleTabs = () => {
    setBio(!bio)
    setImage(!image)
  }
  
  const artist = data.sanityArtist
  const artwork = data.artworkList
  const modalImage = data.artworkModal
  
  return (
    <Layout
      heroImage={artist.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <section>
        <Modal 
          image={modalImage.edges[0].node.mainImage.asset.gatsbyImageData}
          name={artwork.edges[0].node.artist}
          title={artwork.edges[0].node.title.en}
          date={artwork.edges[0].node.date}
          medium={artwork.edges[0].node.medium.en}
          dimensions={artwork.edges[0].node.dimensions}
          price={artwork.edges[0].node.price}
        />
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Artist</h1>
            <p className="subTitle">{artist.title}</p>
            <ul className="artistMenu">
              <li onClick={toggleTabs}>Works</li>
              <li onClick={toggleTabs}>Biography</li>
            </ul>
            <div className={bio ? "hidden artistBio" : "artistBio"} >
              {artist.body._rawEn && <PortableText blocks={artist.body._rawEn} />}
            </div>
          </div>
        </div>
        <div className={image ? "hidden artistImageGrid" : "artistImageGrid"}>
          {artwork.edges.map((artworks: any) => (
            <div style={{margin: 0}} key={artworks.node.id}>
              <GatsbyImage 
                image={artworks.node.mainImage.asset.gatsbyImageData}
                alt=""
              />
              <div className="gridCaption">{artworks.node.title.en} ({artworks.node.date})</div>
            </div>
          ))}
        </div>
        <div><p className="backLink"><Link to="/artists/">Back to Artists</Link></p></div>
      </section>
    </Layout>
  )
}

export default Artist
