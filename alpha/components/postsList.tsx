import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl } from "lib/utils"
import { GridImage } from "components/gridImage"
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
  const { locale } = useRouter()
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {posts && posts.map((post, idx) => post &&
        <div
          key={post._id}
          className={`${idx >= postsPerPage ? u.hidden : null}`}
        >
          <LinkTo href={buildUrl(locale, post.slug, post._type)}>
            <GridImage
              alt={post.title ? post.title : ""}
              idx={idx}
              image={post.image ? post.image : fallbackImage}
              postsPerPage={postsPerPage}
            />
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
      )}
    </div>
  )
}
