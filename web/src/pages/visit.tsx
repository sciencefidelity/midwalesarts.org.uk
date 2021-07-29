import React, { FC } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { VisitQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import GoogleMap from "../components/googleMap"
import "../scss/visit.scss"

interface Props {
  readonly data: VisitQuery
}

const Visit: FC<Props> = ({ data }) => {
  const spaces = data && data.allSanitySpace
  return (
    <Layout
      heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <SEO title="Visit us" />
      <section>
        <div className="visitContainer">
          <h1>{data.sanityPage.title.en}</h1>
          <p className="subTitle">What's on offer at Mid Wales Arts.</p>
          <div className="spacesGrid">
            {spaces.edges.map(space => (
              <Link
                to={`#${space.node.slug.en.current}`}
                key={space.node.id}
                style={{ margin: 0 }}
              >
                <div>
                  <GatsbyImage
                    image={space.node.mainImage.asset.gatsbyImageData}
                    alt={space.node.title.en}
                    className="gridImage"
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
                style={{ margin: 0 }}
                key={space.node.id}
                className="spacesText"
              >
                <h4 className="spacesGridTitle">{space.node.title.en}</h4>
                {space.node.body._rawEn && (
                  <PortableText blocks={space.node.body._rawEn} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoogleMap />
    </Layout>
  )
}

export const query = graphql`
  query Visit {
    sanityPage(title: { en: { eq: "Visit us" } }) {
      title {
        en
      }
      id
      body {
        _rawEn(resolveReferences: { maxDepth: 10 })
      }
      mainImage {
        asset {
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: WEBP
            layout: FULL_WIDTH
          )
        }
      }
    }
    allSanitySpace(sort: { order: DESC, fields: _updatedAt }) {
      edges {
        node {
          body {
            _rawEn(resolveReferences: { maxDepth: 10 })
          }
          id
          mainImage {
            asset {
              gatsbyImageData(
                width: 468
                height: 468
                formats: WEBP
                placeholder: BLURRED
              )
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

export default Visit
