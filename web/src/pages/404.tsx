import React, { FC } from "react"
import { graphql } from "gatsby"

import { FourOhFourQuery } from "../../graphqlTypes"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  readonly data: FourOhFourQuery
}

const FourOhFour: FC<Props> = ({ data }) => {
  return (
    <Layout
      heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <SEO title="Not found" />
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
}

export const query = graphql`
  query FourOhFour {
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

export default FourOhFour
