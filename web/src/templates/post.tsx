import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql `
  query SinglePostQuery($slug: String!) {
    sanityPost(slug: {en: {current: { eq: $slug}}}) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      id
      image {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
      publishedAt
      title {
        en
      }
    }
  }
`

const PostPage = props => {
  const { data } = props
  const post = data && data.sanityPost
  return (
    <Layout
      heroImage={post.image.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
      heroTitle="News"
      heroCaption={post.title.en}
    >
      <section>
        
      </section>
    </Layout>
  )
}

export default PostPage
