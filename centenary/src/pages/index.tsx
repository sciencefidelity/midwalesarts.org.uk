import * as React from "react"
import { graphql } from "gatsby"

import { IndexQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullImage from "../components/fullImage"
import FullQuote from "../components/fullQuote"

interface Props {
  readonly data: IndexQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <FullQuote quote={data.mdx.body} />
      <FullImage
        image={data.imageSharp.gatsbyImageData}
        alt="Stefan Knapp with organic sculptures"
      />
    </Layout>
  )
}

export const query = graphql`
  query Index {
    imageSharp(id: { eq: "2b1744c2-b94a-5d2a-9956-700609cf01b3" }) {
      gatsbyImageData(
        formats: WEBP
        quality: 80
        transformOptions: { fit: COVER }
        placeholder: DOMINANT_COLOR
      )
      id
    }
    mdx(id: {eq: "b0cee314-3cbb-5641-9cab-c55de5e51bd2"}) {
      id
      body
    }
  }
`

export default IndexPage
