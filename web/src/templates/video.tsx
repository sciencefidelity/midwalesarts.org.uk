import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql `
  query SingleVideoQuery($slug: String!) {
    sanityVideo(slug: {en: {current: { eq: $slug } }}) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      id
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
      publishDate(formatString: "DDMMYYYY")
      title {
        en
      }
      videoLink
    }
  }
`

const VideoPage = props => {
  const { data } = props
  const video = data && data.sanityVideo
  return (
    <Layout
      heroImage={video.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
      heroTitle="video"
      heroCaption={video.title.en}
    >
      <section>
        
      </section>
    </Layout>
  )
}

export default VideoPage
