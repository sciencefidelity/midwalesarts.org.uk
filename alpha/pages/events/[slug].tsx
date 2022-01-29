/**
 * Event component (dynamic).
 *
 * @remarks
 * Generates all pages in the subdirectory `/events`.
 *
 * @param data - all props fetched with `eventPageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `eventPathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import ErrorPage from "next/error"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "lib/sanityClient"
import { dateOptions } from "lib/utils"
import { eventPathQuery, eventPageQuery } from "lib/queries"
import Layout from "components/layout"
import Sidebar from "components/sidebar"
// import type {
//   Event,
//   Site,
//   Menu,
//   Social,
//   Post,
//   Exhibition
// } from "generated/schema"
// import utilStyles from "@/styles/utils.module.scss"

// interface Data {
//   event: Event
//   site: Site
//   menu: Menu[]
//   socialLinks: {
//     socialLinks: Social[]
//   }
//   sidebar: {
//     posts: Post[]
//     events: Event[]
//     exhibitions: Exhibition[]
//   }
// }

const EventPage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
  const slug = data?.event?.slug
  if (!slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout
      heroImage={data.event && data.event.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
    >
      <Head>
        <title>
          {locale === "cy" && data.event.title.cy ? data.event.title.cy : data.event.title.en}
          {" | "}
          {locale === "cy" && data.site.siteName.cy
            ? data.site.siteName.cy
            : data.site.siteName.en}
        </title>
      </Head>
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>
              {locale === "cy" && data.event.title.cy
                ? data.event.title.cy
                : data.event.title.en}
            </h1>
            <p className="SubTitle">
              {new Date(data.event.date).toLocaleDateString(locale, dateOptions)}
            </p>
            {data.event.briteLink && (
              <p>
                <a href={`${data.event.briteLink}`} target="blank" rel="noreferrer">
                  {locale === "cy" ? "Archebwch docynnau" : "Book tickets"}
                </a>
              </p>
            )}
            {data.event.body && (
              <BlockContent
                blocks={
                  locale === "cy" && data.event.body.cy
                    ? data.event.body.cy
                    : data.event.body.en
                }
                {...sanityClient.config()}
              />
            )}
            {data.event.briteLink && (
              <p>
                <a href={`${data.event.briteLink}`} target="blank" rel="noreferrer">
                  {locale === "cy" ? "Archebwch docynnau" : "Book tickets"}
                </a>
              </p>
            )}
            <div>
              <p className="backLink">
                <Link href="/events">
                  <a>
                    {locale === "cy"
                      ? "Yn ôl i Ddigwyddiadau"
                      : "Back to Events"}
                  </a>
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
  const paths = await sanityClient.fetch(eventPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(eventPageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

export default EventPage
