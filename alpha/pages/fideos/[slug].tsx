import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
import { videoPathQuery, videoQuery } from "lib/queries"
import { VideoComponent } from "components/videoComponent"
import {
  Label,
  Navigation,
  Organisation,
  PageContext,
  Settings,
  Video
} from "lib/interfaces"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
  video: Video
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(videoPathQuery, { locale: "cy" })
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
  const data = await sanityClient.fetch(videoQuery, {
    slug, locale, template: "Videos"
  })
  const { video, labels, navigation, organisation, settings } = data as Props
  console.log()
  const pageContext = {
    locale: video.__i18n_lang,
    localization: video.localization,
    locales,
    defaultLocale,
    slug: params.slug ? params.slug : ""
  }
  const localizedPaths = pageContext.localization ? getLocalizedPaths(pageContext) : ""
  return {
    props: {
      video,
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

const VideoCy: NextPage<Props> = ({
  video,
  labels,
  navigation,
  organisation,
  pageContext,
  settings
}) => {
  return (
    <VideoComponent
      video={video}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    />
  )
}
export default VideoCy
