import * as React from "react"
import getYouTubeID from "get-youtube-id"
import { useStaticQuery, graphql } from "gatsby"

const VideoEmbed = () => {
  const data = useStaticQuery(graphql`
    query videoQuery {
      sanityVideo {
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
        <iframe 
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>
      </div>
    </section>
  )
}

export default VideoEmbed
