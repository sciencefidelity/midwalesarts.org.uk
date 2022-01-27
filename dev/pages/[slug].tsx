import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import sanityClient from "lib/sanityClient"
import type { Page } from "generated/schema"
import { pagePathQuery, pageQuery } from "lib/queries"
import Layout from "components/layout"
import About from "components/about"
import Artists from "components/artists"
import Events from "components/events"
import Exhibitions from "components/exhibitions"
import Visit from "components/visit"
// import utilStyles from "styles/utils.module.scss"

const Page = ({ data }) => {
  const exhibitionHero = data.currentExhibitions[0] !== undefined ?
    data.currentExhibitions[0].mainImage :
      data.futureExhibitions[0] !== undefined ?
      data.futureExhibitions[0].mainImage : data.pastExhibitions[0].mainImage

  return (
    <Layout
      heroImage={
        data.page.template === "page" ? data.page.heroImage :
        data.page.template === "visit-us" ? data.page.heroImage :
        data.page.template === "artists" ? data.heroArtist.mainImage :
        data.page.template === "events" ? data.upcomingEvents[0].mainImage :
        data.page.template === "exhibitions" ? exhibitionHero :
        data.page.template === "videos"
      }
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
    >
      <Head>
        <title></title>
      </Head>
      {
        data.page.template === "page" &&
        <About page={data.page} />
      }
      {
        data.page.template === "visit-us" &&
        <Visit page={data.page} spaces={data.spaces} />
      }
      {
        data.page.template === "artists" &&
        <Artists page={data.page} artists={data.artists} />
      }
      {
        data.page.template === "events" &&
        <Events
          page={data.page}
          upcomingEvents={data.upcomingEvents}
          pastEvents={data.pastEvents}
          recurringEvents={data.recurringEvents}
        />
      }
      {
        data.page.template === "exhibitions" &&
        <Exhibitions
          page={data.page}
          currentExhibitions={data.currentExhibitions}
          futureExhibitions={data.futureExhibitions}
          pastExhibitions={data.pastExhibitions}
        />
      }
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pagePathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
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

export default Page
