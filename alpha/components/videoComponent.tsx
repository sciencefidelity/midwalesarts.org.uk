import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildURL, subdir } from "lib/utils"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { SidebarComponent } from "components/sidebarComponent"
import { VideoEmbed } from "components/videoEmbed"
import {
  Label,
  Navigation,
  Organisation,
  PageContext,
  PageHead,
  Settings,
  Video,
} from "lib/interfaces"
import s from "styles/video.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
  video: Video
}

export function VideoComponent({
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
  video,
}: Props) {
  const { locale = "en" } = useRouter() as TRouter
  const pageHead: PageHead = {
    title: video.title,
    description: video.ogDescription,
    ogTitle: video.ogTitle,
    ogDescription: video.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildURL(locale, video.slug, video._type)}`,
    ogImage: video.ogImage,
  }
  return (
    <Layout
      heroImage={video.mainImage?.asset ? video.mainImage : settings.ogImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          <h1>{labels[46].text}</h1>
          {video.title && (
            <h2 className={`${s.subtitle}`}>
              {video.title.trim().replace(".", "")}.
            </h2>
          )}
          {video.videoLink && (
            <VideoEmbed label={labels[50].text} videoId={video.videoLink} />
          )}
          {video.body && (
            <div className={`${s.body}`}>
              <PortableText value={video.body} components={components} />
            </div>
          )}
          <nav className={`${s.postNavigation} ${u.flex}`}>
            {video.prev ? (
              <p className={`${s.prevLink}`}>
                <LinkTo
                  href={`/${buildURL(
                    locale,
                    video.prev.slug,
                    video.prev._type
                  )}`}
                >
                  &laquo; {labels[47].text}
                </LinkTo>
              </p>
            ) : (
              <p> </p>
            )}
            <p className={`${s.backLink} ${u.textCenter}`}>
              <LinkTo href={`/${subdir(locale, video._type)}`}>
                {labels[48].text}
              </LinkTo>
            </p>
            {video.next ? (
              <p className={`${s.nextLink} ${u.textRight}`}>
                <LinkTo
                  href={`/${buildURL(
                    locale,
                    video.next.slug,
                    video.next._type
                  )}`}
                >
                  {labels[49].text} &raquo;
                </LinkTo>
              </p>
            ) : (
              <p> </p>
            )}
          </nav>
        </div>
        <SidebarComponent labels={labels} sidebar={video.sidebar} />
      </div>
    </Layout>
  )
}
