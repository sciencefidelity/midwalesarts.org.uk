import { useRouter } from "next/router"
import { buildURL } from "lib/utils"
import { GridImage } from "components/gridImage"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Image, Video } from "lib/interfaces"
import s from "styles/videos.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: Image
  label: string
  postsPerPage: number
  videos: Video[]
}

export function VideosList({
  fallbackImage,
  label,
  postsPerPage,
  videos,
}: Props) {
  const { locale = "en" } = useRouter()
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {videos &&
        videos.map(
          (video, idx) =>
            video && (
              <div
                key={video._id}
                className={`${idx >= postsPerPage ? u.hidden : ""}`}
              >
                <LinkTo href={buildURL(locale, video.slug, video._type)}>
                  <GridImage
                    alt={video.title ?? ""}
                    idx={idx}
                    image={video.mainImage ?? fallbackImage}
                    postsPerPage={postsPerPage}
                  />
                  {video.title && (
                    <div
                      className={`${s.caption} ${u.textRight} ${u.semibold}`}
                    >
                      {video.title}
                    </div>
                  )}
                  {video.publishDate && (
                    <div className={`${s.caption} ${u.textRight}`}>
                      {label}
                      <PostDate date={video.publishDate} />
                    </div>
                  )}
                </LinkTo>
              </div>
            )
        )}
    </div>
  )
}
