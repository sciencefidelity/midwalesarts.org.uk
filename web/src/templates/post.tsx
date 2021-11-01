import React, { FC } from "react"
import { graphql, Link } from "gatsby"

import { SinglePostQuery, SitePageContext } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import Sidebar from "../components/sidebar"

interface Props {
  readonly data: SinglePostQuery
  readonly pageContext: SitePageContext
}

const Post: FC<Props> = ({ data, pageContext }) => {
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
      <SEO title={post.title.en} />
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>News</h1>
            <p className="subTitle">{post.title.en}.</p>
            {post.body._rawEn && <PortableText blocks={post.body._rawEn} />}
            <p>Published on {post.publishedAt}</p>
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

export const query = graphql`
  query SinglePost($slug: String!) {
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

export default Post
