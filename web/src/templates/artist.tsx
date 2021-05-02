import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

import '../scss/artist.scss'

export const query = graphql `
  query singleArtistQuery($name: String!) {
    allSanityArtwork(
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

const ArtistPage = ({ data }) => {
  const [isBio, setBio] = useState(true)
  const [isImage, setImage] = useState(false)

  const toggleTabs = () => {
    setBio(!isBio)
    setImage(!isImage)
  }
  
  const artist = data.sanityArtist
  const artwork = data.allSanityArtwork
  return (
    <Layout
      heroImage={artist.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Artist</h1>
            <p className="subTitle">{artist.title}</p>
            <ul className="artistMenu">
              <li onClick={toggleTabs}>Works</li>
              <li onClick={toggleTabs}>Biography</li>
            </ul>
            <div className={isBio ? "hidden artistBio" : "artistBio"} >
              {artist.body._rawEn && <PortableText blocks={artist.body._rawEn} />}
            </div>
          </div>
        </div>
        <div className={isImage ? "hidden artistImageGrid" : "artistImageGrid"}>
          {artwork.edges.map(artworks => (
            <div style={{margin: 0}}>
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

export default ArtistPage
