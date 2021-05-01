import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../scss/artists.scss'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

export const query = graphql `
  query VisitPageQuery {
    sanityPage(title: {en: {eq: "Visit us"}}) {
      title {
        en
      }
      id
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      mainImage {
        asset {
          gatsbyImageData(width: 1440, placeholder: BLURRED, formats: WEBP)
        }
      }
    }
    allSanitySpace {
      edges {
        node {
          body {
            _rawEn(resolveReferences: {maxDepth: 10})
          }
          id
          mainImage {
            asset {
              gatsbyImageData(width: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
          title {
            en
          }
        }
      }
    }
  }
`

const VisitPage = ({ data }) => {
  const spaces = data && data.allSanitySpace
  return (
    <Layout
      heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{data.sanityPage.title.en}</h1>
            <p className="subTitle">What's on offer at Mid Wales Arts.</p>
            <div className="imageGrid">
              {spaces.edges.map(space => (
                <div style={{margin: 0}}>
                  <GatsbyImage 
                    image={space.node.mainImage.asset.gatsbyImageData}
                    alt=""
                  />
                  <div className="gridCaption">{space.node.title.en}</div>
                </div>
              ))}
            </div>
            {data.sanityPage.body._rawEn && <PortableText blocks={data.sanityPage.body._rawEn} />}
          </div>
          <aside className="sidebar"></aside>
        </div>
      </section>
    </Layout>
  )
}

export default VisitPage
