import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
import { exhibitionPathQuery, exhibitionQuery } from "lib/queries"
import { ExhibitionComponent } from "components/exhibitionComponent"
import {
  Exhibition,
  Label,
  Navigation,
  Organisation,
  PageContext,
  Settings,
} from "lib/interfaces"

interface Props {
  exhibition: Exhibition
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(exhibitionPathQuery, { locale: "en" })
  return {
    paths: paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({
  defaultLocale,
  locales,
  locale,
  params,
}) => {
  const slug = params.slug
  const data = await sanityClient.fetch(exhibitionQuery, {
    slug,
    locale,
    template: "Exhibitions",
  })
  const { exhibition, labels, navigation, organisation, settings } =
    data as Props
  const pageContext = {
    locale: exhibition.__i18n_lang,
    localization: exhibition.localization,
    locales,
    defaultLocale,
    slug: params.slug ? params.slug : "",
  }
  const localizedPaths = pageContext.localization
    ? getLocalizedPaths(pageContext)
    : ""
  return {
    props: {
      exhibition,
      labels,
      navigation,
      organisation,
      pageContext: {
        ...pageContext,
        localizedPaths,
      },
      settings,
    },
  }
}

const ExhibitionEn: NextPage<Props> = ({
  exhibition,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}) => {
  return (
    <ExhibitionComponent
      exhibition={exhibition}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    />
  )
}
export default ExhibitionEn
