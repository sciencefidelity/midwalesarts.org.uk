import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import PortableText from '../components/portableText'
import VideoEmbed from '../components/videoEmbed'
import Sidebar from '../components/sidebar'

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
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Video</h1>
            <p className="subTitle">{video.title.en}.</p>
            <VideoEmbed videoId = {video.videoLink}/>
            {video.body._rawEn && <PortableText blocks={video.body._rawEn} />}
            <div><p className="backLink"><Link to="/videos/">Back to Videos</Link></p></div>
          </div>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export default VideoPage
