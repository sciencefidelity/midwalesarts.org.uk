import * as React from 'react'
import clientConfig from '../../client-config'
import { graphql } from 'gatsby'
import BasePortableText from '@sanity/block-content-to-react'

import Layout from '../components/layout'
import VideoEmbed from '../components/videoEmbed'

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)

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
      publishDate(formatString: "dddd, MMMM Do YYYY")
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
    >
      <section>
        <div className="container">
          <h1>{video.title.en}</h1>
          <h3>{video.publishDate}</h3>
          {video.body._rawEn && <PortableText blocks={video.body._rawEn} />}
          <VideoEmbed 
            videoId = {video.videoLink}
          />
        </div>
      </section>
    </Layout>
  )
}

export default VideoPage
