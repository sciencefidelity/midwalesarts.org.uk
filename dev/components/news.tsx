import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import type { Page, Post } from "@/generated/schema"

const News = ({ page, posts }: {
  page: Page
  posts: Post[]
}) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1>
            {locale === "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="subTitle">
            {locale === "cy" && page.subtitle.cy ? page.subtitle.cy : page.subtitle.en}
          </p>
        </div>
      </div>
      <div className="imageGrid">
        {!!posts &&
          posts.map(
            post =>
              !!post && (
                <div key={post._id} style={{ margin: 0 }}>
                  <Link href={`/news/${post.slug.en.current}`}>
                    <div>
                      <Image
                        src={urlFor(post.image)
                          .width(468)
                          .height(468)
                          .auto("format")
                          .quality(75)
                          .url()}
                        alt={post.title.en}
                        width={468}
                        height={468}
                      />
                      <div className="gridCaption">
                        {locale === "cy" && post.title.cy ? post.title.cy : post.title.en}
                      </div>
                      <div className="gridCaption">
                        {"Published on"} {post.publishedAt}
                      </div>
                    </div>
                  </Link>
                </div>
              )
          )}
      </div>
    </section>
  )
}
export default News
