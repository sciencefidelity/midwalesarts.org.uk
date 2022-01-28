/**
 * Page component (dynamic).
 *
 * @remarks
 * Generates all top level pages (not inculding index).
 *
 * @param data - all props fetched with `pageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `pathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import sanityClient from "lib/sanityClient"
// import type { Page } from "generated/schema"
import { pagePathQuery, pageQuery } from "lib/queries"
import Layout from "components/layout"
import PageTemplate from "components/pageTemplate"
import Artists from "components/artists"
import Events from "components/events"
import Exhibitions from "components/exhibitions"
import News from "components/news"
import Videos from "components/videos"
import Visit from "components/visit"
// import utilStyles from "styles/utils.module.scss"

const PagesTemplage = ({ data }) => {
  const exhibitionHero =
    data.currentExhibitions[0] !== undefined
      ? data.currentExhibitions[0].mainImage
      : data.futureExhibitions[0] !== undefined
      ? data.futureExhibitions[0].mainImage
      : data.pastExhibitions[0].mainImage

  return (
    <Layout
      heroImage={
        data.page.template === "page"
          ? data.page.heroImage
          : data.page.template === "visit-us"
          ? data.page.heroImage
          : data.page.template === "artists"
          ? data.heroArtist.mainImage
          : data.page.template === "events"
          ? data.upcomingEvents[0].mainImage
          : data.page.template === "exhibitions"
          ? exhibitionHero
          : data.page.template === "news"
          ? data.posts[0].image
          : data.page.template === "videos"
          ? data.videos[0].mainImage
          : ""
      }
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
    >
      <Head>
        <title></title>
      </Head>
      {data.page.template === "page" && (
        <PageTemplate
          page={data.page}
          events={data.sidebar.events}
          exhibitions={data.sidebar.exhibitions}
          posts={data.sidebar.posts}
        />
      )}
      {data.page.template === "visit-us" && (
        <Visit page={data.page} spaces={data.spaces} />
      )}
      {data.page.template === "artists" && (
        <Artists page={data.page} artists={data.artists} />
      )}
      {data.page.template === "events" && (
        <Events
          page={data.page}
          upcomingEvents={data.upcomingEvents}
          pastEvents={data.pastEvents}
          recurringEvents={data.recurringEvents}
        />
      )}
      {data.page.template === "exhibitions" && (
        <Exhibitions
          page={data.page}
          currentExhibitions={data.currentExhibitions}
          futureExhibitions={data.futureExhibitions}
          pastExhibitions={data.pastExhibitions}
        />
      )}
      {data.page.template === "news" && (
        <News page={data.page} posts={data.posts} />
      )}
      {data.page.template === "videos" && (
        <Videos page={data.page} videos={data.videos} />
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pagePathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(pageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

export default PagesTemplage
