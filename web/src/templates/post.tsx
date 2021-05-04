import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import PortableText from '../components/portableText'
import Sidebar from '../components/sidebar'

export const query = graphql `
  query SinglePostQuery($slug: String!) {
    sanityPost(slug: {en: {current: { eq: $slug}}}) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      id
      image {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
      publishedAt(formatString: "dddd, MMMM Do YYYY")
      title {
        en
      }
    }
  }
`

const Post = ({ data }) => {
  const post = data && data.sanityPost
  return (
    <Layout
      heroImage={post.image.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>News</h1>
            <p className="subTitle">{post.title.en}.</p>
            {post.body._rawEn && <PortableText blocks={post.body._rawEn} />}
            <p>{post.publishedAt}</p>
            <div><p className="backLink"><Link to="/news/">Back to News</Link></p></div>
          </div>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export default Post
