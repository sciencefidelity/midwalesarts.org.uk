import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
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
  Settings
} from "lib/interfaces"

interface Props {
  event: Event
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(eventPathQuery, { locale: "cy" })
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
  const data = await sanityClient.fetch(eventQuery, {
    slug, locale, template: "Events"
  })
  const { event, labels, navigation, organisation, settings } = data as Props
  console.log()
  const pageContext = {
    locale: event.__i18n_lang,
    localization: event.localization,
    locales,
    defaultLocale,
    slug: params.slug ? params.slug : ""
  }
  const localizedPaths = pageContext.localization ? getLocalizedPaths(pageContext) : ""
  return {
    props: {
      event,
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

const EventCy: NextPage<Props> = ({
  event,
  labels,
  navigation,
  organisation,
  pageContext,
  settings
}) => {
  return (
    <EventComponent
      event={event}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    />
  )
}
export default EventCy
