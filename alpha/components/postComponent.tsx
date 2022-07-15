import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildURL, subdir } from "lib/utils"
import { GridImage } from "components/gridImage"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { SidebarComponent } from "components/sidebarComponent"
import {
  Post,
  Label,
  Navigation,
  Organisation,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/post.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  post: Post
  settings: Settings
}

export const PostComponent: FC<Props> = ({
  labels,
  navigation,
  organisation,
  pageContext,
  post,
  settings,
}) => {
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: post.title,
    description: post.ogDescription,
    ogTitle: post.ogTitle,
    ogDescription: post.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildURL(locale, post.slug, post._type)}`,
    ogImage: post.ogImage,
  }
  return (
    <Layout
      heroImage={post.image?.asset ? post.image : settings.ogImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          <div className={`${s.header} ${u.grid}`}>
            <div>
              <GridImage
                alt={post.title ? post.title : ""}
                idx={1}
                image={post.image ? post.image : settings.ogImage}
                postsPerPage={1}
              />
            </div>
            <div className={`${s.headerContent} ${u.grid}`}>
              <h3 className={`${s.type} ${u.uppercase}`}>
                {post.tags ? post.tags[0] : labels[41].text}
              </h3>
              <div>
                {post.publishedAt && (
                  <h2 className={`${s.subtitle}`}>
                    {labels[42].text.trim()}{" "}
                    <PostDate date={post.publishedAt} />
                  </h2>
                )}
                {post.title && <h1 className={`${s.h1}`}>{post.title}</h1>}
              </div>
              <p
                className={`${s.headerLink}`}
                dangerouslySetInnerHTML={{ __html: "&nbsp;" }}
              />
            </div>
          </div>
          {post.body && (
            <div className={`${s.body}`}>
              <PortableText value={post.body} components={components} />
            </div>
          )}
          {post.publishedAt && (
            <p className={`${s.publishedAt}`}>
              {labels[42].text.trim()} <PostDate date={post.publishedAt} />
            </p>
          )}
          <nav className={`${s.postNavigation} ${u.flex}`}>
            {post.prev ? (
              <p className={`${s.prevLink}`}>
                <LinkTo
                  href={`/${buildURL(locale, post.prev.slug, post.prev._type)}`}
                >
                  &laquo; {labels[43].text}
                </LinkTo>
              </p>
            ) : (
              <p> </p>
            )}
            <p className={`${s.backLink} ${u.textCenter}`}>
              <LinkTo href={`/${subdir(locale, post._type)}`}>
                {labels[44].text}
              </LinkTo>
            </p>
            {post.next ? (
              <p className={`${s.nextLink} ${u.textRight}`}>
                <LinkTo
                  href={`/${buildURL(locale, post.next.slug, post.next._type)}`}
                >
                  {labels[45].text} &raquo;
                </LinkTo>
              </p>
            ) : (
              <p> </p>
            )}
          </nav>
        </div>
        <SidebarComponent labels={labels} sidebar={post.sidebar} />
      </div>
    </Layout>
  )
}
