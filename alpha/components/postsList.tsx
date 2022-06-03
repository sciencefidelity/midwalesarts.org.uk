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
  postsPerPage: number
}

export const PostsList: FC<Props> = ({ fallbackImage, label, posts, postsPerPage }) => {
  const [loaded, setLoaded] = useState(false)
  const { locale } = useRouter()

  const onLoad = () => {
    setLoaded(true)
  }
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {posts && posts.map((post, idx) => post && (
        <div key={post._id} style={{ margin: 0 }} className={`${idx >= postsPerPage ? u.hidden : null}`}>
          <LinkTo href={buildUrl(locale, post.slug, post._type)}>

            <div
              style={{
                // backgroundColor: post.accent,
                aspectRatio: "1/1",
                marginBottom: "1.5rem",
                position: "relative"
              }}
            >
              <div
                style={{ position: "relative", aspectRatio: "1/1", inset: 0, zIndex: 10 }}
                className={`${u.gridImage} ${loaded ? u.loaded : null}`}
              >
                <Image
                  src={urlFor(post.image ? post.image : fallbackImage)
                    .width(468)
                    .height(468)
                    .auto("format")
                    .quality(75)
                    .url()}
                  alt={post.title}
                  onLoad={onLoad}
                  width={2000}
                  height={2000}
                />
              </div>
              {/* <img
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
              /> */}
              <div style={{ position: "absolute", aspectRatio: "1/1", inset: 0 }}>
                <Image
                  src={urlFor(post.image ? post.image : fallbackImage)
                    .width(10)
                    .height(10)
                    .auto("format")
                    .quality(5)
                    .url()}
                  alt=""
                  width={2000}
                  height={2000}
                  onLoad={onLoad}
                  loading="eager"
                />
              </div>
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
