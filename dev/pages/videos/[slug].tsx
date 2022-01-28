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
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "lib/sanityClient"
// import type { Post } from "generated/schema"
import { videoPageQuery, videoPathQuery } from "lib/queries"
import Layout from "components/layout"
import VideoEmbed from "components/videoEmbed"
import Sidebar from "components/sidebar"
// import utilStyles from "styles/utils.module.scss"

const VideoPage = ({ data }) => {
  const { locale } = useRouter()
  return (
    <Layout
      heroImage={data.video.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
    >
      <Head>
        <title>
          {locale == "cy" && data.video.title.cy
            ? data.video.title.cy
            : data.video.title.en}
        </title>
      </Head>
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{locale === "cy" ? "Fideo" : "Video"}</h1>
            <p className="subTitle">
              {locale == "cy" && data.video.title.cy
                ? data.video.title.cy
                : data.video.title.en}
              .
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(videoPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(videoPageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

export default VideoPage
