import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import getYouTubeID from "get-youtube-id"

const VideoEmbed = () => {
  const data = useStaticQuery(graphql`
    query videoQuery {
      sanityVideo(title: {en: {eq: "Six of the Best"}}) {
        id
        title {
          en
        }
        videoLink
      }
    }
  `)
    
  const id = getYouTubeID(data.sanityVideo.videoLink)
  const url = `https://www.youtube.com/embed/${id}`

  if(!id) {
    return <div>YouTube video missing</div>
  }
  return (
    <section>
      <div>
        <h1>{data.sanityVideo.title.en}</h1>
        <iframe 
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        >
        </iframe>
      </div>
    </section>
  )
}

export default VideoEmbed
