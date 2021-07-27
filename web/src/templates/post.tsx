import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import PortableText from "../components/portableText"
import Sidebar from "../components/sidebar"

export const query = graphql`
  query SinglePostQuery($slug: String!) {
    sanityPost(slug: { en: { current: { eq: $slug } } }) {
      body {
        _rawEn(resolveReferences: { maxDepth: 10 })
      }
      id
      image {
        asset {
          gatsbyImageData(
            width: 1440
            formats: WEBP
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      publishedAt(formatString: "dddd, MMMM Do YYYY")
      title {
        en
      }
    }
  }
`

const Post = ({ data, pageContext }) => {
  const post = data && data.sanityPost

  const prev = pageContext.prev
    ? {
        url: `/news/${pageContext.prev.slug.en.current}`,
      }
    : null

  const next = pageContext.next
    ? {
        url: `/news/${pageContext.next.slug.en.current}`,
      }
    : null

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
            <div className="postNavigation">
              {prev ? (
                <p className="prevLink">
                  <Link to={prev.url}>&lt; Previous post</Link>
                </p>
              ) : (
                <p>&nbsp;</p>
              )}
              <p className="backLink">
                <Link to="/news/">Back to News</Link>
              </p>
              {next ? (
                <p className="nextLink">
                  <Link to={next.url}>Next post &gt;</Link>
                </p>
              ) : (
                <p>&nbsp;</p>
              )}
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export default Post
