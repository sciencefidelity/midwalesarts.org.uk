import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../scss/artists.scss'

import Layout from '../components/layout'

const Exhibitions = ({ data }) => {
  return (
    <Layout
      heroImage={data.currentExhibitions.edges[0].node.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Exhibitions</h1>
            <p className="subTitle">Art in our galleries and garden.</p>
          </div>
        </div>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <p>Current Exhibition</p>
          </div>
        </div>
        <div className="imageGrid">
          {data.currentExhibitions.edges.map(exhibitions => (
            <>
              <Link 
                to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
                style={{margin: 0}}
              >
                <div>
                  <GatsbyImage 
                    image={exhibitions.node.mainImage.asset.gatsbyImageData}
                    alt=""
                    className="gridImage"
                  />
                  <div className="gridCaption">{exhibitions.node.title.en}</div>
                  <div className="gridCaption">
                    {exhibitions.node.dateStart} to {exhibitions.node.dateEnd}
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <p>Next Exhibition</p>
          </div>
        </div>
        <div className="imageGrid">
          {data.futureExhibitions.edges.map(exhibitions => (
            <>
              <Link 
                to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
                style={{margin: 0}}
              >
                <div>
                  <GatsbyImage 
                    image={exhibitions.node.mainImage.asset.gatsbyImageData}
                    alt=""
                    className="gridImage"
                  />
                  <div className="gridCaption">{exhibitions.node.title.en}</div>
                  <div className="gridCaption">
                    {exhibitions.node.dateStart} to {exhibitions.node.dateEnd}
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <p>Past Exhibitions</p>
          </div>
        </div>
        <div className="imageGrid">
          {data.pastExhibitions.edges.map(exhibitions => (
            <>
              <Link 
                to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
                style={{margin: 0}}
              >
                <div>
                  <GatsbyImage 
                    image={exhibitions.node.mainImage.asset.gatsbyImageData}
                    alt=""
                    className="gridImage"
                  />
                  <div className="gridCaption">{exhibitions.node.title.en}</div>
                  <div className="gridCaption">
                    {exhibitions.node.dateStart} to {exhibitions.node.dateEnd}
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql `
  query exhibitionQuery($currentDate: Date!) {
    currentExhibitions: allSanityExhibition(
      filter: {dateEnd: {gt: $currentDate}, dateStart: {lt: $currentDate}}
      sort: {fields: dateStart, order: DESC}) {
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
              gatsbyImageData(width: 1440, height: 1440, formats: WEBP, placeholder: BLURRED)
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
    futureExhibitions: allSanityExhibition(
      filter: {dateStart: {gt: $currentDate}}
      sort: {fields: dateStart, order: DESC}) {
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
              gatsbyImageData(width: 1440, height: 1440, formats: WEBP, placeholder: BLURRED)
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
    pastExhibitions: allSanityExhibition(
      filter: {dateEnd: {lt: $currentDate}}
      sort: {fields: dateStart, order: DESC}) {
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
              gatsbyImageData(width: 1440, height: 1440, formats: WEBP, placeholder: BLURRED)
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
  }
`

export default Exhibitions
