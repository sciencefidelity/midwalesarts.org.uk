import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const PastExhibitions = ({ data, currentDate }) => {
  return (
    <div className="imageGrid">
      {data.allSanityExhibition.edges.map(pastExhibitions => (
        <>
          <Link 
            to={`/exhibitions/${pastExhibitions.node.slug.en.current}/`}
            style={{margin: 0}}
          >
            <div>
              <GatsbyImage 
                image={pastExhibitions.node.mainImage.asset.gatsbyImageData}
                alt=""
                className="gridImage"
              />
              <div className="gridCaption">{pastExhibitions.node.title.en}</div>
              <div className="gridCaption">
                {pastExhibitions.node.dateStart} to {pastExhibitions.node.dateEnd}
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  )
}

export const query = graphql `
  query pastExhibitionQuery {
    allSanityExhibition(
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

export default PastExhibitions
