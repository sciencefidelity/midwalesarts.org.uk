import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { buildUrl, urlFor } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Video } from "lib/interfaces"
import s from "styles/videos.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: any
  label: string
  videos: Video[]
}

export const VideosList: FC<Props> = ({ fallbackImage, label, videos }) => {
  const { locale } = useRouter()
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {videos && videos.map(video => video &&
        <div key={video._id} style={{ margin: 0 }}>
          <LinkTo href={buildUrl(locale, video.slug, video._type)}>
            <Image
              src={urlFor(video.mainImage ? video.mainImage : fallbackImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              alt={video.title}
              width={2000}
              height={2000}
            />
            {video.title &&
              <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
                {video.title}
              </div>
            }
            {video.publishDate && <div className={`${s.caption} ${u.textRight}`}>
              {label}
              <PostDate date={video.publishDate} />
            </div>}
          </LinkTo>
        </div>
      )}
    </div>
  )
}
