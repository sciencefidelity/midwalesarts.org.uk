import { Fragment } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { dayToNumber, sortWorkshops } from "lib/dateHelpers"
import { CalendarWorkshops } from "components/calendarWorkshops"
import { WorkshopPreview } from "components/workshopPreview"
import { Layout } from "components/layout"
import { SidebarComponent } from "components/sidebarComponent"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/workshops.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export function Workshops({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings,
}: Props) {
  const { locale = "en" } = useRouter()
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${
      page.slug
    }`,
    ogImage: page.ogImage,
  }
  const workshops = sortWorkshops(page.workshops)
  const calendarDays = []
  for (let i = 0; i < 7; i += 1) {
    calendarDays[i] = workshops.filter(
      (workshop) => dayToNumber(workshop.day) === i
    )
  }
  return (
    <Layout
      heroImage={page.mainImage?.asset ? page.mainImage : settings.ogImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <section className={`${s.title}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle && (
            <h2 className={`${s.subtitle}`}>
              {page.subtitle.trim().replace(".", "")}.
            </h2>
          )}
          {page.body && (
            <div className={`${s.body}`}>
              <PortableText value={page.body} components={components} />
            </div>
          )}
          {page.workshops && (
            <WorkshopPreview
              workshops={workshops}
              fallbackImage={settings.ogImage}
            />
          )}
          <section className={`${s.calendar}`}>
            {/* <h3 className={`${s.h3}`}>Workshop Calendar</h3> */}
            {calendarDays.map((day, idx) => (
              <Fragment key={idx}>
                <CalendarWorkshops workshops={day} />
              </Fragment>
            ))}
          </section>
        </section>
        <SidebarComponent labels={labels} sidebar={page.sidebar} />
      </div>
    </Layout>
  )
}
