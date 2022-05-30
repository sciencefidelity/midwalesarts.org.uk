import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildUrl, subdir, urlFor } from "lib/utils"
import { EventDate } from "components/date"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
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
            <div className={`${s.headerContent} ${u.grid}`}>
              <h3 className={`${s.type} ${u.uppercase}`}>
                {event.category ? event.category[locale] : labels[29].text[locale]}
              </h3>
              {event.date && <h2 className={`${s.subtitle}`}>
                <EventDate date={event.date} />
              </h2>}
              <h1 className={`${s.h1}`}>{event.title}</h1>
              {event.briteLink ? <p className={`${s.headerLink}`}>
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {labels[30].text[locale]}
                </a>
              </p>
                : <p
                  className={`${s.headerLink}`}
                  dangerouslySetInnerHTML={{ __html: "&nbsp;" }}
                />}
            </div>
          </div>
          <div>
            {event.body &&
              <PortableText value={event.body} components={components} />
            }
            <p className={`${s.briteLink} ${u.textCenter}`}>
              {event.briteLink &&
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {labels[30].text[locale]}
                </a>
              }
            </p>
            <div>
              <p className={`${s.backLink} ${u.textCenter}`}>
                <LinkTo href={`/${subdir(locale, event._type)}`}>
                  {labels[32].text[locale]}
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
