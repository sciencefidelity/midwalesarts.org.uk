/* eslint indent: "off" */
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

export const PostsList: FC<Props> = ({
  fallbackImage,
  label,
  posts,
  postsPerPage
}) => {
  const [loaded, setLoaded] = useState(false)
  const { locale } = useRouter()

  const onLoad = () => {
    setLoaded(true)
  }
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {posts &&
        posts.map(
          (post, idx) =>
            post && (
              <div
                key={post._id}
                className={`${idx >= postsPerPage ? u.hidden : null}`}
              >
                <LinkTo href={buildUrl(locale, post.slug, post._type)}>
                  <div className={`${u.lazyImageContainer}`}>
                    <div className={`${u.gridImageContainer} ${loaded ? u.loaded : null}`}>
                      <img
                        onLoad={onLoad}
                        loading={idx < 3 ? "eager" : "lazy"}
                        className={`${u.gridImage} ${loaded ? u.loaded : null}`}
                        alt={post.title}
                        src={urlFor(post.image ? post.image : fallbackImage)
                          .width(468)
                          .height(468)
                          .auto("format")
                          .quality(75)
                          .url()}
                        srcSet={
                          `${urlFor(post.image ? post.image : fallbackImage)
                            .width(300)
                            .height(300)
                            .auto("format")
                            .quality(70)
                            .url()} 300w,
                          ${urlFor(post.image ? post.image : fallbackImage)
                            .width(400)
                            .height(400)
                            .auto("format")
                            .quality(70)
                            .url()} 400w,
                          ${urlFor(post.image ? post.image : fallbackImage)
                            .width(500)
                            .height(500)
                            .auto("format")
                            .quality(70)
                            .url()} 500w,
                          ${urlFor(post.image ? post.image : fallbackImage)
                            .width(600)
                            .height(600)
                            .auto("format")
                            .quality(70)
                            .url()} 600w,
                          ${urlFor(post.image ? post.image : fallbackImage)
                            .width(700)
                            .height(700)
                            .auto("format")
                            .quality(70)
                            .url()} 700w,
                          ${urlFor(post.image ? post.image : fallbackImage)
                            .width(800)
                            .height(800)
                            .auto("format")
                            .quality(70)
                            .url()} 800w,
                        `}
                        height={468}
                        width={468}
                      />
                    </div>
                    <div className={`${u.placeholderContainer}`}>
                      <img
                        src={urlFor(post.image ? post.image : fallbackImage)
                          .width(10)
                          .height(10)
                          .auto("format")
                          .quality(5)
                          .url()}
                        alt=""
                        className={`${u.placeholder}`}
                        width={468}
                        height={468}
                        loading={idx >= postsPerPage ? "lazy" : "eager"}
                      />
                    </div>
                  </div>
                  {post.title && (
                    <div
                      className={`${s.caption} ${u.textRight} ${u.semibold}`}
                    >
                      {post.title}
                    </div>
                  )}
                  <div className={`${s.caption} ${u.textRight}`}>
                    {label}
                    {post.publishedAt && <PostDate date={post.publishedAt} />}
                  </div>
                </LinkTo>
              </div>
            )
        )}
    </div>
  )
}
