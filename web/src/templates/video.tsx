import React, { FC } from "react"
import { graphql, Link } from "gatsby"

import { SingleVideoQuery } from "../../graphqlTypes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import VideoEmbed from "../components/videoEmbed"
import Sidebar from "../components/sidebar"

interface Props {
  readonly data: SingleVideoQuery
}

const VideoPage: FC<Props> = ({ data }) => {
  const video = data && data.sanityVideo
  return (
    <Layout
      heroImage={video.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <SEO title={video.title.en} />
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Video</h1>
            <p className="subTitle">{video.title.en}.</p>
            <VideoEmbed videoId={video.videoLink} />
            {video.body._rawEn && <PortableText blocks={video.body._rawEn} />}
            <div>
              <p className="backLink">
                <Link to="/videos/">Back to Videos</Link>
              </p>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SingleVideo($slug: String!) {
    sanityVideo(slug: { en: { current: { eq: $slug } } }) {
      body {
        _rawEn(resolveReferences: { maxDepth: 10 })
      }
      id
      mainImage {
        asset {
          gatsbyImageData(
            width: 1440
            formats: WEBP
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
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

export default VideoPage
