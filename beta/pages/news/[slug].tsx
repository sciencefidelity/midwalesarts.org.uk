/**
 * Post component (dynamic).
 *
 * @remarks
 * Generates all pages in the subdirectory `/news`.
 *
 * @param data - all props fetched with `postPageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `postPathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import sanityClient from "lib/sanityClient"
import { postPageQuery, postPathQuery } from "lib/queries"
import Layout from "components/layout"
import { components } from "components/portableTextComponents"
import ErrorTemplate from "components/errorTemplate"
import Link from "components/link"
import Localize from "components/localize"
import PostDate from "components/postDate"
import Sidebar from "components/sidebar"
import { NewsData, Path } from "lib/interfaces"
// TODO: published on, next post, back to news, previous post hard coded
// TODO: create next and previous links
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = await sanityClient.fetch(postPathQuery)
  const pathsWithLocales = paths.flatMap((path: Path) => {
    return locales.map(locale => ({...path, locale}) )
  })
  return {
    paths: pathsWithLocales,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(postPageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const PostPage = ({ data }: { data: NewsData }) => {
  const router = useRouter()
  if(router.isFallback) {
    return (
      <ErrorTemplate />
    )
  }
  if(!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const { locale } = router
  const { menu, post, sidebar, site, socialLinks } = data
  const blocks = locale === "cy" && post.body.cy ? post.body.cy : post.body.en
  return (
    <Layout
      caption={locale === "cy" && post.title.cy
        ? post.title.cy
        : post.title.en
      }
      heroImage={post.image}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
      title={locale === "cy" && post.title.cy ? post.title.cy : post.title.en}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{locale === "cy" ? "Newyddion" : "News"}</h1>
            {post.title &&
              <p className="subTitle"><Localize data={post.title} />.</p>
            }
            {post.body &&
              <PortableText value={blocks} components={components} />
            }
            <p>
              {locale === "cy" ? "Wedi'i gyhoeddi ar" : "Published on"}{" "}
              {post.publishedAt && <PostDate date={post.publishedAt} />}
            </p>
            <div className="postNavigation">
              {data ? (
                <p className="prevLink">
                  <Link href="#">
                    &lt;{" "}
                    {locale === "cy" ? "Post blaenorol" : "Previous post"}
                  </Link>
                </p>
              ) : (
                <p>{" "}</p>
              )}
              <p className="backLink">
                <Link href="/news">
                  {locale === "cy" ? "Yn ôl i Newyddion" : "Back to News"}
                </Link>
              </p>
              {data ? (
                <p className="nextLink">
                  <Link href="#">
                    {locale === "cy" ? "Post nesaf" : "Next post"}
                    {" "}&gt;
                  </Link>
                </p>
              ) : (
                <p>{" "}</p>
              )}
            </div>
          </div>
          <Sidebar
            events={sidebar.events}
            exhibitions={sidebar.exhibitions}
            posts={sidebar.posts}
          />
        </div>
      </section>
    </Layout>
  )
}
export default PostPage