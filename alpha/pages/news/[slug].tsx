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
// import ErrorPage from "next/error"
import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { dateOptions } from "lib/utils"
import { postPageQuery, postPathQuery } from "lib/queries"
import Layout from "components/layout"
import Sidebar from "components/sidebar"
import PortableText from "components/portableText"
// import type { Post } from "generated/schema"
// import utilStyles from "@/styles/utils.module.scss"

const PostPage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
  // const slug = data?.post?.slug
  // if (!slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <Layout
      heroImage={data.post.image}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
      title={locale === "cy" && data.post.title.cy ? data.post.title.cy : data.post.title.en}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{locale === "cy" ? "Newyddion" : "News"}</h1>
            {data.post.title && (
              <p className="subTitle">
                {locale === "cy" && data.post.title.cy
                  ? data.post.title.cy
                  : data.post.title.en}
                .
              </p>
            )}
            {data.post.body && (
              <PortableText
                blocks={data.post.body}
              />
            )}
            <p>
              {locale === "cy" ? "Wedi'i gyhoeddi ar" : "Published on"}{" "}
              {new Date(data.post.publishedAt).toLocaleDateString(
                locale,
                dateOptions
              )}
            </p>
            <div className="postNavigation">
              {data ? (
                <p className="prevLink">
                  <Link href="#">
                    <a>
                      {locale === "cy"
                        ? "&lt; Post blaenorol"
                        : "&lt; Previous post"}
                    </a>
                  </Link>
                </p>
              ) : (
                <p> </p>
              )}
              <p className="backLink">
                <Link href="/news">
                  <a>
                    {locale === "cy" ? "Yn ôl i Newyddion" : "Back to News"}
                  </a>
                </Link>
              </p>
              {data ? (
                <p className="nextLink">
                  <Link href="#">
                    <a>
                      {locale === "cy" ? "Post nesaf &gt;" : "Next post &gt;"}
                    </a>
                  </Link>
                </p>
              ) : (
                <p> </p>
              )}
            </div>
          </div>
          <Sidebar
            events={data.sidebar.events}
            exhibitions={data.sidebar.exhibitions}
            posts={data.sidebar.posts}
          />
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
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

export default PostPage
