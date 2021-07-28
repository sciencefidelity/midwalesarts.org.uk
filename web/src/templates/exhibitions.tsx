import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { ExhibitionQuery } from "../../graphqlTypes"
import Layout from "../components/layout"
import ExhibitionPrieview from "../components/exhibitionPreview"

const Exhibitions = (data: ExhibitionQuery) => {
  return (
    <Layout
      heroImage={
        data.currentExhibitions.edges[0] !== undefined
          ? data.currentExhibitions.edges[0].node.heroImage.asset
              .gatsbyImageData
          : data.futureExhibitions.edges[0].node.heroImage.asset.gatsbyImageData
      }
      heroImageCaption={
        data.currentExhibitions.edges[0] !== undefined
          ? data.currentExhibitions.edges[0].node.mainImage.caption
          : data.futureExhibitions.edges[0].node.mainImage.caption
      }
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Exhibitions</h1>
            <p className="subTitle">Art in our galleries and garden.</p>
          </div>
        </div>
        <div className="exhibitionPreviewGrid">
          {!!data.currentExhibitions.edges[0] && (
            <>
              {!!data.currentExhibitions &&
              data.currentExhibitions.edges.length === 1 ? (
                <ExhibitionPrieview
                  heading="Current exhibition"
                  exhibition={data.currentExhibitions.edges[0].node}
                />
              ) : (
                <>
                  <ExhibitionPrieview
                    heading="Current exhibitions"
                    exhibition={data.currentExhibitions.edges[0].node}
                  />
                  <ExhibitionPrieview
                    heading="&nbsp;"
                    exhibition={data.currentExhibitions.edges[1].node}
                  />
                </>
              )}
            </>
          )}
          {!!data.futureExhibitions.edges[0] && (
            <ExhibitionPrieview
              heading="Next exhibition"
              exhibition={
                !!data.futureExhibitions.edges[0] &&
                data.futureExhibitions.edges[0].node
              }
            />
          )}
        </div>
        <div className="sidebarContainer" style={{ marginTop: `6rem` }}>
          <div className="portableContainer">
            <p>Past exhibitions</p>
          </div>
        </div>
        <div className="exhibitionGrid">
          {!!data.pastExhibitions &&
            data.pastExhibitions.edges.map(
              exhibitions =>
                !!exhibitions && (
                  <div key={exhibitions.node.id} style={{ margin: 0 }}>
                    <Link
                      to={`/exhibitions/${exhibitions.node.slug.en.current}/`}
                    >
                      <div>
                        <GatsbyImage
                          image={
                            exhibitions.node.mainImage.asset.gatsbyImageData
                          }
                          alt={exhibitions.node.mainImage.caption}
                          className="gridImage"
                        />
                        <div className="gridCaption">
                          {exhibitions.node.title.en}
                        </div>
                        <div className="gridCaption">
                          {exhibitions.node.dateStart} to{" "}
                          {exhibitions.node.dateEnd}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Exhibition($currentDate: Date!) {
    currentExhibitions: allSanityExhibition(
      filter: { dateEnd: { gt: $currentDate }, dateStart: { lt: $currentDate } }
      sort: { fields: dateStart, order: ASC }
    ) {
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
              gatsbyImageData(
                width: 624
                height: 624
                formats: WEBP
                placeholder: BLURRED
              )
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
      filter: { dateStart: { gt: $currentDate } }
      sort: { fields: dateStart, order: DESC }
    ) {
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
              gatsbyImageData(
                width: 624
                height: 624
                formats: WEBP
                placeholder: BLURRED
              )
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
    pastExhibitions: allSanityExhibition(
      filter: { dateEnd: { lt: $currentDate } }
      sort: { fields: dateStart, order: DESC }
    ) {
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
              gatsbyImageData(
                width: 624
                height: 624
                formats: WEBP
                placeholder: BLURRED
              )
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
