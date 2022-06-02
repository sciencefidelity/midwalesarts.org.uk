import { FC } from "react"
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
  const { locale } = useRouter()
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {posts && posts.map(post => post && (
        <div key={post._id} style={{ margin: 0 }}>
          <LinkTo href={buildUrl(locale, post.slug, post._type)}>
            <Image
              src={urlFor(post.image ? post.image : fallbackImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              alt={post.title}
              width={2000}
              height={2000}
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
      ))}
    </div>
  )
}
