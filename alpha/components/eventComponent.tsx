import { FC, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildUrl, localize, subdir, urlFor } from "lib/utils"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { SidebarComponent } from "components/sidebarComponent"
import {
  Event,
  Label,
  Navigation,
  Organisation,
  PageContext,
  PageHead,
  Settings
} from "lib/interfaces"
import s from "styles/event.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  event: Event
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const EventComponent: FC<Props> = ({
  event,
  labels,
  navigation,
  organisation,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: event.title,
    description: event.ogDescription,
    ogTitle: event.ogTitle,
    ogDescription: event.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildUrl(locale, event.slug, event._type)}`,
    ogImage: event.ogImage
  }
  return (
    <Layout
      caption={event.mainImage.caption}
      heroImage={event.mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          <div className={`${s.header} ${u.grid}`}>
            <div>
              <Image
                src={urlFor(event.mainImage)
                  .width(468)
                  .height(468)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={event.title}
                width={2000}
                height={2000}
              />
            </div>
            <div className={`${u.grid}`}>
              {event.date && <h2 className={`${s.subtitle}`}>
                <PostDate date={event.date} />
              </h2>}
              <h1 className={`${s.h1}`}>{event.title}</h1>
              <p className={`${s.headerLink}`}>
                {event.briteLink &&
                  <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                    {labels[27].text[locale]}
                  </a>
                }
              </p>
            </div>
          </div>
          <div>
            {/* <h1>
              {event.title && event.title}
            </h1>
            <h2 className={`${s.subtitle}`}>
              {event.date && <PostDate date={event.date} />}
            </h2> */}

            {event.body &&
              <PortableText value={event.body} components={components} />
            }
            <p className={`${s.briteLink} ${u.textCenter}`}>
              {event.briteLink &&
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {labels[27].text[locale]}
                </a>
              }
            </p>
            <div>
              <p className={`${s.backLink} ${u.textCenter}`}>
                <LinkTo href={`/${subdir(locale, event._type)}`}>
                  {labels[28].text[locale]}
                </LinkTo>
              </p>
            </div>
          </div>
        </div>
        <SidebarComponent labels={labels} sidebar={event.sidebar} />
      </div>
    </Layout>
  )
}
