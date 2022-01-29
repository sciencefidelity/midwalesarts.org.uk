import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import type { Page, Video } from "@/generated/schema"

const Videos = ({ page, videos }: { page: Page; videos: Video[] }) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1>
            {locale === "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="subTitle">
            {locale === "cy" && page.subtitle.cy
              ? page.subtitle.cy
              : page.subtitle.en}
          </p>
        </div>
      </div>
      <div className="imageGrid">
        {!!videos &&
          videos.map(
            (video: Video) =>
              !!videos && (
                <div key={video._id} style={{ margin: 0 }}>
                  <Link href={`/videos/${video.slug.en.current}`}>
                    <a>
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
                        width={468}
                        height={468}
                      />
                      <div className="gridCaption">
                        {locale === "cy" && video.title.cy
                          ? video.title.cy
                          : video.title.en}
                      </div>
                    </a>
                  </Link>
                </div>
              )
          )}
      </div>
    </section>
  )
}
export default Videos
