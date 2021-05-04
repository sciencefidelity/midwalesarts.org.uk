import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../scss/artists.scss'

import Layout from '../components/layout'

const Exhibitions = ({ data }) => {
  return (
    <Layout
      heroImage={data.currentExhibitionsHero.edges[0].node.mainImage.asset.gatsbyImageData}
      heroImageCaption={data.currentExhibitionsHero.edges[0].node.mainImage.caption}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Exhibitions</h1>
            <p className="subTitle">Art in our galleries and garden.</p>
          </div>
        </div>
        <div className="exhibitionGrid">
          {data.currentExhibitions.edges.map((exhibitions: any) => (
            <div key={exhibitions.node.id}>
              <p>Current exhibition</p>
              <Link 
                to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
                style={{margin: 0}}
              >
                <GatsbyImage 
                  image={exhibitions.node.mainImage.asset.gatsbyImageData}
                  alt=""
                  className="gridImage"
                />
                <div className="gridCaption">{exhibitions.node.title.en}</div>
                <div className="gridCaption">
                  {exhibitions.node.dateStart} to {exhibitions.node.dateEnd}
                </div>
              </Link>
            </div>
          ))}
          {data.futureExhibitions.edges.map((exhibitions: any) => (
            <div style={{margin: 0}} key={exhibitions.node.id}>
              <p>Next exhibition</p>
              <Link 
                to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
                style={{margin: 0}}
              >
                <GatsbyImage 
                  image={exhibitions.node.mainImage.asset.gatsbyImageData}
                  alt=""
                  className="gridImage"
                />
                <div className="gridCaption">{exhibitions.node.title.en}</div>
                <div className="gridCaption">
                  {exhibitions.node.dateStart} to {exhibitions.node.dateEnd}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="sidebarContainer" style={{marginTop: `6rem`}}>
          <div className="portableContainer">
            <p>Past exhibitions</p>
          </div>
        </div>
        <div className="exhibitionGrid">
          {data.pastExhibitions.edges.map((exhibitions: any) => (
            <div key={exhibitions.node.id} style={{margin: 0}}>
              <Link 
                to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
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
            </div>
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
              gatsbyImageData(width: 624, height: 624, formats: WEBP, placeholder: BLURRED)
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
    currentExhibitionsHero: allSanityExhibition(
      filter: {dateEnd: {gt: $currentDate}, dateStart: {lt: $currentDate}}
      sort: {fields: dateStart, order: DESC}) {
      edges {
        node {
          mainImage {
            caption
            asset {
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
            }
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
