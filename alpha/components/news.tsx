import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { buildUrl, urlFor } from "@/lib/utils"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings
} from "lib/interfaces"
import s from "styles/news.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const News: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${page.slug}`,
    ogImage: page.ogImage
  }
  return (
    <Layout
      caption={page.posts[0].title}
      heroImage={page.posts[0].image}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle && <h2 className={`${s.subtitle}`}>{page.subtitle}</h2>}
        </div>
      </div>
      <div className={`${s.imageGrid} ${u.grid}`}>
        {page.posts && page.posts.map(post => post && (
          <div key={post._id} style={{ margin: 0 }}>
            <LinkTo href={buildUrl(locale, post.slug, page._type)}>
              <Image
                src={urlFor(post.image)
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
                <div className={`${s.caption} ${u.textRight}`}>{post.title}</div>
              }
              <div className={`${s.caption} ${u.textRight}`}>
                {labels[17].text[locale]}
                {post.publishedAt && <PostDate date={post.publishedAt} />}
              </div>
            </LinkTo>
          </div>
        ))}
      </div>
    </Layout>
  )
}
