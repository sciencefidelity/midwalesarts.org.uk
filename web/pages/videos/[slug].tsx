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
import { useRouter } from "next/router"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "lib/sanityClient"
import { videoPageQuery, videoPathQuery } from "lib/queries"
import Layout from "components/layout"
import ErrorTemplate from "components/errorTemplate"
import Link from "components/link"
import Localize from "components/localize"
import Sidebar from "components/sidebar"
import VideoEmbed from "components/videoEmbed"
import { VideoData } from "lib/interfaces"
// TODO: video, back to videos hard coded
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(videoPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
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

const VideoPage = ({ data }: { data: VideoData }) => {
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
  const { video, menu, sidebar, site, socialLinks } = data
  return (
    <Layout
      heroImage={video.mainImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
      title={locale === "cy" && video.title.cy
        ? video.title.cy
        : video.title.en}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{locale === "cy" ? "Fideo" : "Video"}</h1>
            {video.title &&
              <p className="subTitle"><Localize data={video.title} />.</p>
            }
            {video.videoLink && (
              <VideoEmbed videoId={video.videoLink} />
            )}
            {video.body.en && (
              <BlockContent
                blocks={
                  locale === "cy" && video.body.cy
                    ? video.body.cy
                    : video.body.en
                }
                {...sanityClient.config()}
              />
            )}
            <div>
              <p className="backLink">
                <Link href="/videos">
                  {locale === "cy" ? "Yn ôl i Fideos" : "Back to Videos"}
                </Link>
              </p>
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
export default VideoPage
