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
  Params,
  Path,
  Settings,
  Video,
} from "lib/interfaces"

interface Data {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
  video: Video
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Path[] = await sanityClient.fetch(videoPathQuery, {
    locale: "cy",
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
  const data: Data = await sanityClient.fetch(videoQuery, {
    slug,
    locale,
    template: "Videos",
  })
  const { video, labels, navigation, organisation, settings } = data
  const pageContext = {
    locale: video.__i18n_lang,
    localization: video.localization,
    locales,
    defaultLocale,
    slug: params?.slug ?? "",
  } as PageContext
  const localizedPaths = pageContext.localization
    ? getLocalizedPaths(pageContext)
    : ""
  return {
    props: {
      video,
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

const VideoCy: NextPage<Data> = ({
  video,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}: Data) => (
  <VideoComponent
    video={video}
    labels={labels}
    navigation={navigation}
    organisation={organisation}
    pageContext={pageContext}
    settings={settings}
  />
)
export default VideoCy
