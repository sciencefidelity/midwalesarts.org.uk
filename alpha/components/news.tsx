import { FC } from "react"
import Image from "next/image"
import { urlFor } from "@/lib/utils"
import Link from "components/link"
import Localize from "components/localize"
import { NewsProps } from "lib/interfaces"

const News: FC<NewsProps> = ({ page, posts }) => {
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          {page.title &&
            <h1><Localize data={page.title} /></h1>
          }
          {page.subtitle &&
            <p className="subTitle"><Localize data={page.subtitle} /></p>
          }
        </div>
      </div>
      <div className="imageGrid">
        {posts && posts.map(post => post && (
          <div key={post._id} style={{ margin: 0 }}>
            <Link href={`/news/${post.slug.en.current}`}>
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
              <div className="gridCaption"><Localize data={post.title} /></div>
              <div className="gridCaption">
                {"Published on"}{" "}{post.publishedAt}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
export default News
