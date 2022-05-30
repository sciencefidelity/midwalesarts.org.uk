import { FC, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildUrl, localize, subdir, urlFor } from "lib/utils"
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
  Settings
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
  settings
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
      /${buildUrl(locale, post.slug, post._type)}`,
    ogImage: post.ogImage
  }
  return (
    <Layout
      heroImage={post.image}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          <h1>{labels[33].text[locale]}</h1>
          {post.title && <h2 className={`${s.subtitle}`}>
            {post.title.trim().replace(".", "")}.
          </h2>}
          {post.body && <div className={`${s.body}`}>
            <PortableText value={post.body} components={components} />
          </div>}
          <p>
            {labels[34].text[locale]}
            {post.publishedAt && <PostDate date={post.publishedAt} />}
          </p>
          <nav className={`${s.postNavigation} ${u.flex}`}>
            {post.prev ? <p className={`${s.prevLink}`}>
              <LinkTo
                href={`/${buildUrl(
                  locale, post.prev.slug, post.prev._type
                )}`}
              >
                &laquo;{" "}{labels[35].text[locale]}
              </LinkTo>
            </p> : <p>{" "}</p>}
            <p className={`${s.backLink} ${u.textCenter}`}>
              <LinkTo href={`/${subdir(locale, post._type)}`}>
                {labels[36].text[locale]}
              </LinkTo>
            </p>
            {post.next ? <p className={`${s.nextLink} ${u.textRight}`}>
              <LinkTo
                href={`/${buildUrl(
                  locale, post.next.slug, post.next._type
                )}`}
              >
                {labels[37].text[locale]}{" "}&raquo;
              </LinkTo>
            </p> : <p>{" "}</p>}
          </nav>
        </div>
        <SidebarComponent labels={labels} sidebar={post.sidebar} />
      </div>
    </Layout>
  )
}
