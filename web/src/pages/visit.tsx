import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../scss/visit.scss'

import Layout from '../components/layout'
import PortableText from '../components/portableText'
import GoogleMap from '../components/googleMap'

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
    allSanitySpace(sort: {order: DESC, fields: _updatedAt}) {
      edges {
        node {
          body {
            _rawEn(resolveReferences: {maxDepth: 10})
          }
          id
          mainImage {
            asset {
              gatsbyImageData(width: 400, height: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
          title {
            en
          }
          slug {
            en {
              current
            }
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
        <div className="visitContainer">
          <h1>{data.sanityPage.title.en}</h1>
          <p className="subTitle">What's on offer at Mid Wales Arts.</p>
          <div className="spacesGrid">
            {spaces.edges.map(space => (
              <Link 
                to={`#${space.node.slug.en.current}`}
                style={{margin: 0}}
              >
              <div style={{margin: 0}}>
                <GatsbyImage 
                  image={space.node.mainImage.asset.gatsbyImageData}
                  alt=""
                />
                <div className="gridCaption">{space.node.title.en}</div>
              </div>
              </Link>
            ))}
          </div>
          <div className="spacesTextGrid">
            {spaces.edges.map(space => (
              <div
                id={space.node.slug.en.current}
                style={{margin: 0}}
              >
                <h4 className="spacesGridTitle">{space.node.title.en}</h4>
                {space.node.body._rawEn && <PortableText blocks={space.node.body._rawEn} />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoogleMap />
    </Layout>
  )
}

export default VisitPage
