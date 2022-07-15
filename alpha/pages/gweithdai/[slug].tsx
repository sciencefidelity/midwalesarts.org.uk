import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
import { workshopPathQuery, workshopQuery } from "lib/queries"
import { WorkshopComponent } from "components/workshopComponent"
import {
  Workshop,
  Label,
  Navigation,
  Organisation,
  PageContext,
  Settings,
} from "lib/interfaces"

interface Props {
  workshop: Workshop
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(workshopPathQuery, { locale: "cy" })
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
  const data = await sanityClient.fetch(workshopQuery, {
    slug,
    locale,
    template: "Workshops",
  })
  const { workshop, labels, navigation, organisation, settings } = data as Props
  const pageContext = {
    locale: workshop.__i18n_lang,
    localization: workshop.localization,
    locales,
    defaultLocale,
    slug: params.slug ? params.slug : "",
  }
  const localizedPaths = pageContext.localization
    ? getLocalizedPaths(pageContext)
    : ""
  return {
    props: {
      workshop,
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

const WorkshopCy: NextPage<Props> = ({
  workshop,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}) => {
  return (
    <WorkshopComponent
      workshop={workshop}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    />
  )
}
export default WorkshopCy
