import getYouTubeID from "get-youtube-id"
import s from "styles/video.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  label: string
  videoId: string
}

export function VideoEmbed({ label, videoId }: Props) {
  const id = getYouTubeID(videoId)
  if (!id) return <div>{label}</div>
  const url = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1`
  return (
    <section>
      <div className={`${s.embedContainer} ${u.relative}`}>
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}
