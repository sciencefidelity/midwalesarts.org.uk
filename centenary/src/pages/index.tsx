import * as React from "react"
import { graphql } from "gatsby"

import { IndexQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullImage from "../components/fullImage"
import FullQuote from "../components/fullQuote"
import Title from "../components/title"
import TextRight from "../components/textRight"

interface Props {
  readonly data: IndexQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      {data && <FullQuote quote={data.allMdx.edges[0].node.body} />}
      {data && (
        <FullImage
          image={data.allImageSharp.edges[2].node.gatsbyImageData}
          alt="Stefan Knapp with organic sculptures"
        />
      )}
      {data && <Title title="Beginnings" date="1921 - 1946" />}
      {data && (
        <TextRight
          text={data.allMdx.edges[1].node.body}
          image={data.allImageSharp.edges[0].node.gatsbyImageData}
          alt="Stefan Knapp skiing"
        />
      )}
    </Layout>
  )
}

export const query = graphql`
  query Index {
    allImageSharp {
      edges {
        node {
          id
          gatsbyImageData(
            formats: WEBP
            quality: 80
            transformOptions: { fit: COVER }
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          id
          body
        }
      }
    }
  }
`

export default IndexPage
