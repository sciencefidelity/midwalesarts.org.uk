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
  Params,
  Path,
  Settings,
} from "lib/interfaces"

interface Data {
  exhibition: Exhibition
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Path[] = await sanityClient.fetch(exhibitionPathQuery, {
    locale: "en",
  })
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({
  defaultLocale,
  locales,
  locale,
  params,
}) => {
  const { slug } = params as Params
  const data: Data = await sanityClient.fetch(exhibitionQuery, {
    slug,
    locale,
    template: "Exhibitions",
  })
  const { exhibition, labels, navigation, organisation, settings } = data
  const pageContext = {
    locale: exhibition.__i18n_lang,
    localization: exhibition.localization,
    locales,
    defaultLocale,
    slug: params?.slug ?? "",
  } as PageContext
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

const ExhibitionEn: NextPage<Data> = ({
  exhibition,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}: Data) => (
  <ExhibitionComponent
    exhibition={exhibition}
    labels={labels}
    navigation={navigation}
    organisation={organisation}
    pageContext={pageContext}
    settings={settings}
  />
)
export default ExhibitionEn
