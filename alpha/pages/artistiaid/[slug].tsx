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
  Settings
} from "lib/interfaces"

interface Props {
  artist: Artist
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(artistPathQuery, { locale: "cy" })
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
  const slug = params.slug
  console.log(slug)
  const data = await sanityClient.fetch(artistQuery, {
    slug, locale, template: "Artists"
  })
  const { artist, labels, navigation, organisation, settings } = data as Props
  console.log()
  const pageContext = {
    locale: artist.__i18n_lang,
    localization: artist.localization,
    locales,
    defaultLocale,
    slug: params.slug ? params.slug : ""
  }
  const localizedPaths = pageContext.localization ? getLocalizedPaths(pageContext) : ""
  return {
    props: {
      artist,
      labels,
      navigation,
      organisation,
      pageContext: {
        ...pageContext,
        localizedPaths
      },
      settings
    }
  }
}

const ArtistCy: NextPage<Props> = ({
  artist,
  labels,
  navigation,
  organisation,
  pageContext,
  settings
}) => {
  return (
    <ArtistComponent
      artist={artist}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    />
  )
}
export default ArtistCy
