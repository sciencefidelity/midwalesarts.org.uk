import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "lib/utils"
import Link from "components/link"
import Localize from "components/localize"
import { VideosProps } from "lib/interfaces"

const Videos: FC<VideosProps> = ({ page, videos }) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          {page.title &&
            <h1><Localize data={page.title} /></h1>
          }
          {page.subtitle &&
            <p className="sidebarContainer">
              <Localize data={page.subtitle} />
            </p>
          }
        </div>
      </div>
      <div className="imageGrid">
        {videos && videos.map( video =>
          video && (
            <div key={video._id} style={{ margin: 0 }}>
              <Link href={`/videos/${video.slug.en.current}`}>
                <Image
                  src={urlFor(video.mainImage)
                    .width(468)
                    .height(468)
                    .auto("format")
                    .quality(75)
                    .url()}
                  alt={
                    locale === "cy" && video.title.cy
                      ? video.title.cy
                      : video.title.en
                  }
                  width={2000}
                  height={2000}
                />
                {video.title &&
                  <div className="gridCaption">
                    <Localize data={video.title} />
                  </div>
                }
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  )
}
export default Videos
