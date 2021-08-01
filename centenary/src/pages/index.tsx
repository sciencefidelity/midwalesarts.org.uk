import * as React from "react"
import { graphql } from "gatsby"

import { IndexQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullImage from "../components/fullImage"
import FullQuote from "../components/fullQuote"
import Title from "../components/title"
import SplitText from "../components/splitText"

interface Props {
  readonly data: IndexQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout
      image={data.allImageSharp.edges[0].node.gatsbyImageData}
      alt="Stefan Knapp with organic sculptures"
    >
      <Seo title="Home" />
      {data && <FullQuote quote={data.allMdx.edges[0].node.body} />}
      {data && (
        <FullImage
          image={data.allImageSharp.edges[1].node.gatsbyImageData}
          alt="Stefan Knapp with organic sculptures"
        />
      )}
      {data && <Title title="Beginnings" date="(1921 - 1946)" />}
      {data && (
        <SplitText
          text={data.allMdx.edges[1].node.body}
          image={data.allImageSharp.edges[2].node.gatsbyImageData}
          alt="Stefan Knapp skiing"
          flow={{ flexFlow: `row` }}
        />
      )}
      {data && <FullQuote quote={data.allMdx.edges[2].node.body} />}
      {data && (
        <SplitText
          text={data.allMdx.edges[3].node.body}
          image={data.allImageSharp.edges[3].node.gatsbyImageData}
          alt="Distorted (1947)"
          flow={{ flexFlow: `row-reverse` }}
          fit="contain"
        />
      )}
      {data && <Title title="Early Phase" date="(1947 - 1953)" />}
      {data && (
        <FullImage
          image={data.allImageSharp.edges[4].node.gatsbyImageData}
          alt="Burial (1946)"
          fit="contain"
        />
      )}
    </Layout>
  )
}

export const query = graphql`
  query Index {
    allImageSharp(sort: { fields: fluid___originalName, order: ASC }) {
      edges {
        node {
          id
          gatsbyImageData(
            formats: WEBP
            placeholder: DOMINANT_COLOR
            transformOptions: { fit: COVER }
            quality: 80
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
