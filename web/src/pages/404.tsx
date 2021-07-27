import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query spacesQuery {
    sanityPage(title: { en: { eq: "About" } }) {
      mainImage {
        asset {
          id
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: WEBP
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
`

const NotFoundPage = ({ data }) => (
  <Layout
    heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
    heroImageCaption="&nbsp;"
  >
    <SEO title="404: Not found" />
    <div
      className="container"
      style={{
        textAlign: `center`,
      }}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
