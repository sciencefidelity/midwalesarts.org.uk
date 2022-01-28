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
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "lib/sanityClient"
import { dateOptions } from "lib/utils"
import type { Event, Site, Menu, Social, Post, Exhibition } from "generated/schema"
import { eventPathQuery, eventPageQuery } from "lib/queries"
import Layout from "components/layout"
import Sidebar from "components/sidebar"
// import utilStyles from "@/styles/utils.module.scss"

interface Data {
  event: Event
  site: Site
  menu: Menu[]
  socialLinks: {
    socialLinks: Social[]
  }
  sidebar: {
    posts: Post[]
    events: Event[]
    exhibitions: Exhibition[]
  }
}

const Event = ({ data }: {data: Data}) => {
  const {
    event, site, menu, socialLinks, sidebar
  } = data
  const { locale } = useRouter()
  return (
    <Layout
      heroImage={event && event.mainImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
    >
      <Head>
        <title>
          {locale == "cy" && event.title.cy ?
            event.title.cy :
            event.title.en
          }
          {" | "}
          {locale == "cy" && site.siteName.cy ?
            site.siteName.cy :
            site.siteName.en
          }
        </title>
      </Head>
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>
              {locale == "cy" && event.title.cy ?
                event.title.cy :
                event.title.en
              }
            </h1>
            <p className="SubTitle">
              {new Date(event.date).toLocaleDateString(locale, dateOptions)}
            </p>
            {event.briteLink && (
              <p>
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {locale === "cy" ? "Archebwch docynnau" : "Book tickets"}
                </a>
              </p>
            )}
            {event.body &&
              <BlockContent
                blocks={
                  locale === "cy" && event.body.cy ?
                  event.body.cy :
                  event.body.en
                }
                {...sanityClient.config()}
              />
            }
            {event.briteLink && (
              <p>
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {locale === "cy" ? "Archebwch docynnau" : "Book tickets"}
                </a>
              </p>
            )}
            <div>
              <p className="backLink">
                <Link href="/events">
                  {locale === "cy" ? "Yn ôl i Ddigwyddiadau" : "Back to Events"}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(eventPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { slug } = params
  const data = await sanityClient.fetch(eventPageQuery, { slug: params.slug })
  return {
    props: {
      data
    }
  }
}

export default Event
