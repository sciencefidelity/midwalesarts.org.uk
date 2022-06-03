import { FC, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { buildUrl, urlFor } from "@/lib/utils"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Post } from "lib/interfaces"
import s from "styles/news.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: any
  label: string
  posts: Post[]
}

export const PostsList: FC<Props> = ({ fallbackImage, label, posts }) => {
  const [loaded, setLoaded] = useState(false)
  const { locale } = useRouter()

  const onLoad = () => {
    setLoaded(true)
  }
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {posts && posts.map(post => post && (
        <div key={post._id} style={{ margin: 0 }}>
          <LinkTo href={buildUrl(locale, post.slug, post._type)}>
            {/* <Image
              src={urlFor(post.image ? post.image : fallbackImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              alt={post.title}
              width={2000}
              height={2000}
            /> */}
            <div
              style={{
                // backgroundColor: post.accent,
                aspectRatio: "1/1",
                marginBottom: "1.5rem",
                position: "relative"
              }}
            >
              <img
                src={urlFor(post.image ? post.image : fallbackImage)
                  .width(468)
                  .height(468)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={post.title}
                width="100%"
                height="100%"
                onLoad={onLoad}
                style={{
                  zIndex: 2,
                  position: "relative",
                  objectFit: "cover"
                }}
                className={`${u.gridImage} ${loaded ? u.loaded : null}`}
              />
              <img
                src={urlFor(post.image ? post.image : fallbackImage)
                  .width(8)
                  .height(8)
                  .auto("format")
                  .quality(5)
                  .url()}
                alt=""
                width="100%"
                height="100%"
                onLoad={onLoad}
                style={{
                  position: "absolute",
                  inset: 0
                }}
              />
            </div>
            {post.title &&
              <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
                {post.title}
              </div>
            }
            <div className={`${s.caption} ${u.textRight}`}>
              {label}
              {post.publishedAt && <PostDate date={post.publishedAt} />}
            </div>
          </LinkTo>
        </div>
      ))}
    </div>
  )
}
