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
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { eventPathQuery, eventPageQuery } from "lib/queries"
import Layout from "components/layout"
import ErrorTemplate from "components/errorTemplate"
import Link from "components/link"
import Localize from "components/localize"
import PortableText from "components/portableText"
import PostDate from "components/postDate"
import Sidebar from "components/sidebar"
import { EventData } from "lib/interfaces"
// TODO: book tickets, back to events hard coded
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

const EventPage = ({ data }: { data: EventData }) => {
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
  const { event, menu, sidebar, site, socialLinks } = data
  return (
    <Layout
      heroImage={event && event.mainImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
      title={locale === "cy" && event.title.cy ? event.title.cy : event.title.en}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>
              {event.title && <Localize data={event.title} />}
            </h1>
            <p className="SubTitle">
              {event.date && <PostDate date={event.date} />}
            </p>
            <p>
              {event.briteLink &&
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {locale === "cy" ? "Archebwch docynnau" : "Book tickets"}
                </a>
              }
            </p>
            {event.body && <PortableText blocks={event.body} />}
            <p>
              {event.briteLink &&
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {locale === "cy" ? "Archebwch docynnau" : "Book tickets"}
                </a>
              }
            </p>
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
export default EventPage
