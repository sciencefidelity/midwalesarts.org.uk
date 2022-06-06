import React from 'react'
import getYouTubeID from 'get-youtube-id'

const YouTubePreview = ({ value }) => {
  const id = getYouTubeID(value.url)
  const url = `https://www.youtube.com/embed/${id}`
  return (
    <iframe
      width="100%"
      height="100%"
      // width="523"
      // height="294.1875"
      title="YouTube Preview"
      src={url}
      frameBorder="0"
      style={{ width: '100%', aspectRatio: '16 / 9' }}
    ></iframe>
  )
}
export default YouTubePreview
