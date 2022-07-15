import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import sanityClient from "lib/sanityClient"
import { getLocalizedPaths } from "lib/localizeHelpers"
import { postPathQuery, postQuery } from "lib/queries"
import { PostComponent } from "components/postComponent"
import {
  Post,
  Label,
  Navigation,
  Organisation,
  PageContext,
  Settings,
} from "lib/interfaces"

interface Props {
  post: Post
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postPathQuery, { locale: "cy" })
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
  const data = await sanityClient.fetch(postQuery, {
    slug,
    locale,
    template: "News",
  })
  const { post, labels, navigation, organisation, settings } = data as Props
  const pageContext = {
    locale: post.__i18n_lang,
    localization: post.localization,
    locales,
    defaultLocale,
    slug: params.slug ? params.slug : "",
  }
  const localizedPaths = pageContext.localization
    ? getLocalizedPaths(pageContext)
    : ""
  return {
    props: {
      post,
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

const PostCy: NextPage<Props> = ({
  post,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}) => {
  return (
    <PostComponent
      post={post}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    />
  )
}
export default PostCy
