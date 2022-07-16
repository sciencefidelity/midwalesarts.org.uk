import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
import { artistPathQuery, artistQuery } from "lib/queries"
import { ArtistComponent } from "components/artistComponent"
import {
  Artist,
  Label,
  Navigation,
  Organisation,
  PageContext,
  Params,
  Path,
  Settings,
} from "lib/interfaces"

interface Data {
  artist: Artist
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Path[] = await sanityClient.fetch(artistPathQuery, {
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
  const data: Data = await sanityClient.fetch(artistQuery, {
    slug,
    locale,
    template: "Artists",
  })
  const { artist, labels, navigation, organisation, settings } = data
  const pageContext = {
    locale: artist.__i18n_lang,
    localization: artist.localization,
    locales,
    defaultLocale,
    slug: params?.slug ?? "",
  } as PageContext
  const localizedPaths = pageContext.localization
    ? getLocalizedPaths(pageContext)
    : ""
  return {
    props: {
      artist,
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

const ArtistEn: NextPage<Data> = ({
  artist,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}: Data) => (
  <ArtistComponent
    artist={artist}
    labels={labels}
    navigation={navigation}
    organisation={organisation}
    pageContext={pageContext}
    settings={settings}
  />
)
export default ArtistEn
