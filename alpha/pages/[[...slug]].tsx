import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
import { Artists } from "components/artists"
import { Events } from "components/events"
import { Exhibitions } from "components/exhibitions"
import { Home } from "components/home"
import { News } from "components/news"
import { PageComponent } from "components/pageComponent"
import { Support } from "components/support"
import { Videos } from "components/videos"
import { Visit } from "components/visit"
import { Workshops } from "components/workshops"
import { pageQuery, pagePathQuery } from "lib/queries"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  Settings
} from "lib/interfaces"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pagePathQuery)
  return {
    paths: paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({
  defaultLocale,
  locales,
  locale,
  params
}) => {
  const slug = params.slug ? params.slug[params?.slug?.length - 1] : "index"
  const data = await sanityClient.fetch(pageQuery, { slug, locale })
  const { labels, navigation, organisation, page, settings } = data as Props
  const pageContext = {
    locale: page.__i18n_lang,
    localization: page.localization,
    locales,
    defaultLocale,
    slug: params.slug ? params.slug : ""
  }
  const localizedPaths = pageContext.localization ? getLocalizedPaths(pageContext) : ""
  return {
    props: {
      labels,
      navigation,
      organisation,
      page,
      pageContext: {
        ...pageContext,
        localizedPaths
      },
      settings
    }
  }
}

const Pages: NextPage<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  return (
    <>
      {page.template === "Artists" &&
        <Artists
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Events" &&
        <Events
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Exhibitions" &&
        <Exhibitions
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Home" &&
        <Home
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "News" &&
        <News
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Page" &&
        <PageComponent
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Support" &&
        <Support
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Videos" &&
        <Videos
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Visit" &&
        <Visit
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
      {page.template === "Workshops" &&
        <Workshops
          labels={labels}
          navigation={navigation}
          page={page}
          organisation={organisation}
          pageContext={pageContext}
          settings={settings}
        />
      }
    </>
  )
}
export default Pages
