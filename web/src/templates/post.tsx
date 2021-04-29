import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

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
      publishedAt(formatString: "dddd, MMMM Do YYYY")
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
    >
      <section>
        <div className="container">
          <h1>{post.title.en}</h1>
          <h3>{post.publishedAt}</h3>
          {post.body._rawEn && <PortableText blocks={post.body._rawEn} />}
        </div>
      </section>
    </Layout>
  )
}

export default PostPage
