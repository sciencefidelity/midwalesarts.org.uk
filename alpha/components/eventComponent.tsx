import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildURL, subdir } from "lib/utils"
import { EventDate } from "components/date"
import { GridImage } from "components/gridImage"
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
  Settings,
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

export function EventComponent({
  event,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}: Props) {
  const { locale = "en" } = useRouter() as TRouter
  const pageHead: PageHead = {
    title: event.title,
    description: event.ogDescription,
    ogTitle: event.ogTitle,
    ogDescription: event.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildURL(locale, event.slug, event._type)}`,
    ogImage: event.ogImage,
  }
  return (
    <Layout
      heroImage={event.mainImage ?? settings.ogImage}
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
              <GridImage
                alt={event.title ?? ""}
                idx={1}
                image={
                  event.mainImage?.asset ? event.mainImage : settings.ogImage
                }
                postsPerPage={1}
              />
            </div>
            <div className={`${s.headerContent} ${u.grid}`}>
              <h3 className={`${s.type} ${u.uppercase}`}>
                {event.category ?? labels[30].text}
              </h3>
              <div>
                {event.date && (
                  <h2 className={`${s.subtitle}`}>
                    <EventDate date={event.date} />
                  </h2>
                )}
                {event.title && <h1 className={`${s.h1}`}>{event.title}</h1>}
              </div>
              {event.briteLink ? (
                <p className={`${s.headerLink}`}>
                  <a
                    href={`${event.briteLink}`}
                    target="blank"
                    rel="noreferrer"
                  >
                    {labels[31].text}
                  </a>
                </p>
              ) : (
                <p
                  className={`${s.headerLink}`}
                  // TODO: make this less dangerous
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: "&nbsp;" }}
                />
              )}
            </div>
          </div>
          <div>
            {event.body && (
              <PortableText value={event.body} components={components} />
            )}
            <p className={`${s.briteLink} ${u.textCenter}`}>
              {event.briteLink && (
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  {labels[31].text}
                </a>
              )}
            </p>
            <div>
              <p className={`${s.backLink} ${u.textCenter}`}>
                <LinkTo href={`/${subdir(locale, event._type)}`}>
                  {labels[33].text}
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
