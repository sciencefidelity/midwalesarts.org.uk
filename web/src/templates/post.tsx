import * as React from 'react'
import clientConfig from '../../client-config'
import { graphql } from 'gatsby'
import BasePortableText from '@sanity/block-content-to-react'

import Layout from '../components/layout'

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)

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
