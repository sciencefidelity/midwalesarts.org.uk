import { useRouter } from "next/router"
import { buildURL } from "lib/utils"
import { GridImage } from "components/gridImage"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Image, Post } from "lib/interfaces"
import s from "styles/news.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: Image
  label: string
  posts: Post[]
  postsPerPage: number
}

export function PostsList({
  fallbackImage,
  label,
  posts,
  postsPerPage,
}: Props) {
  const { locale = "en" } = useRouter() as TRouter
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {posts &&
        posts.map(
          (post, idx) =>
            post && (
              <div
                key={post._id}
                className={`${idx >= postsPerPage ? u.hidden : ""}`}
              >
                <LinkTo href={buildURL(locale, post.slug, post._type)}>
                  <GridImage
                    alt={post.title ?? ""}
                    idx={idx}
                    image={post.image ?? fallbackImage}
                    postsPerPage={postsPerPage}
                  />
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
