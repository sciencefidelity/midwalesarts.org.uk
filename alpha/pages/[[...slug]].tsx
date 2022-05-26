import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
// import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
// import { Layout } from "components/layout"
import { pageQuery, pagePathQuery } from "lib/queries"
import {
  Navigation,
  Organisation,
  Page,
  PageContext,
  Settings
} from "lib/interfaces"

interface Props {
  navigation:
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
  const { page, settings } = data as Props
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
      page,
      pageContext: {
        ...pageContext,
        localizedPaths
      },
      settings
    }
  }
}

const Home: NextPage<Props> = ({
  page,
  settings
}) => {
  return page.template === "Home" && <div>{page.title}</div>
}

export default Home
