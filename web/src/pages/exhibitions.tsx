import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../scss/artists.scss'

import Layout from '../components/layout'

const Exhibitions = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityExhibition.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <section>
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>Exhibitions</h1>
                <p className="subTitle">Art in our galleries and garden.</p>
              </div>
            </div>
            <div className="imageGrid">
              {data.allSanityExhibition.edges.map(exhibitions => (
                <>
                  <Link 
                    to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
                    style={{margin: 0}}
                  >
                    <div>
                      <GatsbyImage 
                        image={exhibitions.node.mainImage.asset.gatsbyImageData}
                        alt=""
                      />
                      <div className="gridCaption">{exhibitions.node.title.en}</div>
                      <div className="gridCaption">{exhibitions.node.dateStart} to {exhibitions.node.dateEnd}</div>
                    </div>
                  </Link>
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
    allSanityExhibition(sort: {fields: dateStart, order: DESC}) {
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
          dateStart(formatString: "Do MMMM")
          dateEnd(formatString: "Do MMMM YYYY")
          id
          body {
            _rawEn
          }
        }
      }
    }
    sanityExhibition(title: {en: {eq: "Stop! Act!"}}) {
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Exhibitions
