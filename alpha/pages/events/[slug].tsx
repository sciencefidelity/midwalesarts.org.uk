import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
import { eventPathQuery, eventQuery } from "lib/queries"
import { EventComponent } from "components/eventComponent"
import {
  Event,
  Label,
  Navigation,
  Organisation,
  PageContext,
  Params,
  Path,
  Settings,
} from "lib/interfaces"

interface Data {
  event: Event
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Path[] = await sanityClient.fetch(eventPathQuery, {
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
  const data: Data = await sanityClient.fetch(eventQuery, {
    slug,
    locale,
    template: "Events",
  })
  const { event, labels, navigation, organisation, settings } = data
  const pageContext = {
    locale: event.__i18n_lang,
    localization: event.localization,
    locales,
    defaultLocale,
    slug: params?.slug ?? "",
  } as PageContext
  const localizedPaths = pageContext.localization
    ? getLocalizedPaths(pageContext)
    : ""
  return {
    props: {
      event,
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

const EventEn: NextPage<Data> = ({
  event,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}: Data) => (
  <EventComponent
    event={event}
    labels={labels}
    navigation={navigation}
    organisation={organisation}
    pageContext={pageContext}
    settings={settings}
  />
)
export default EventEn
