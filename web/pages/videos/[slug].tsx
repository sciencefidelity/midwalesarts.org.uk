/**
 * Video component (dynamic).
 *
 * @remarks
 * Generates all pages in the subdirectory `/videos`.
 *
 * @param data - all props fetched with `videoPageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `videoPathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import DefaultErrorPage from "next/error"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "lib/sanityClient"
import { videoPageQuery, videoPathQuery } from "lib/queries"
import Layout from "components/layout"
import VideoEmbed from "components/videoEmbed"
import Sidebar from "components/sidebar"
// import type { Post } from "generated/schema"
// import utilStyles from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(videoPageQuery, { slug })
  return {
    props: {
      data
    }
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(videoPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}

const VideoPage = ({ data }) => {
  const router = useRouter()
  if(router.isFallback) {
    return <h1>Loading...</h1>
  }
  if(!data) {
    return <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
  }
  const { locale } = router
  return (
    <Layout
      heroImage={data.video.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
      title={locale === "cy" && data.video.title.cy ? data.video.title.cy : data.video.title.en}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{locale === "cy" ? "Fideo" : "Video"}</h1>
            <p className="subTitle">
              {locale === "cy" && data.video.title.cy
                ? data.video.title.cy
                : data.video.title.en}.
            </p>
            {data.video.videoLink && (
              <VideoEmbed videoId={data.video.videoLink} />
            )}
            {data.video.body.en && (
              <BlockContent
                blocks={
                  locale === "cy" && data.video.body.cy
                    ? data.video.body.cy
                    : data.video.body.en
                }
                {...sanityClient.config()}
              />
            )}
            <div>
              <p className="backLink">
                <Link href="/videos">
                  <a>{locale === "cy" ? "Yn ôl i Fideos" : "Back to Videos"}</a>
                </Link>
              </p>
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

export default VideoPage
