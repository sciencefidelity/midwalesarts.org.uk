import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import ExhibitionPrieview from '../components/exhibitionPreview'

const Exhibitions = ({ data }) => {
  
  const currentExhibition = data.currentExhibitions.edges[0].node
  const nextExhibition = data.futureExhibitions.edges[0].node
  
  return (
    <Layout
      heroImage={currentExhibition.heroImage.asset.gatsbyImageData}
      heroImageCaption={currentExhibition.mainImage.caption}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Exhibitions</h1>
            <p className="subTitle">Art in our galleries and garden.</p>
          </div>
        </div>
        <div className="exhibitionPreviewGrid">
          <ExhibitionPrieview
            heading="Current exhibition"
            exhibition={currentExhibition}
          />
          <ExhibitionPrieview
            heading="Next exhibition"
            exhibition={nextExhibition}
          />
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
                    alt={exhibitions.node.mainImage.caption}
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
            caption
            asset {
              gatsbyImageData(width: 624, height: 624, formats: WEBP, placeholder: BLURRED)
            }
          }
          heroImage: mainImage {
            caption
            asset {
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
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
            caption
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
            caption
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
  }
`

export default Exhibitions
