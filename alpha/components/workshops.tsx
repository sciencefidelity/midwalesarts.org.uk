import { FC, Fragment } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { sortWorkshops } from "lib/utils"
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
  Settings
} from "lib/interfaces"
import s from "styles/workshops.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Workshops: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: page.title,
    description: page.ogDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogURL: `${settings.canonicalURL}${locale === "cy" ? "/cy" : ""}/${page.slug}`,
    ogImage: page.ogImage
  }
  const workshops = sortWorkshops(page.workshops)
  const sundays = workshops.filter(workshop => workshop.day === "Sunday")
  const mondays = workshops.filter(workshop => workshop.day === "Monday")
  const tuesdays = workshops.filter(workshop => workshop.day === "Tuesday")
  const wednesdays = workshops.filter(workshop => workshop.day === "Wednesday")
  const thursdays = workshops.filter(workshop => workshop.day === "Thursday")
  const fridays = workshops.filter(workshop => workshop.day === "Friday")
  const saturdays = workshops.filter(workshop => workshop.day === "Saturday")
  const days = [ sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays ]
  return (
    <Layout
      heroImage={page.mainImage}
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
          {page.subtitle && <h2 className={`${s.subtitle}`}>
            {page.subtitle.trim().replace(".", "")}.
          </h2>}
          {page.body && <div className={`${s.body}`}>
            <PortableText value={page.body} components={components} />
          </div>}
          {page.workshops && (
            <WorkshopPreview
              eventData={workshops}
              heading=""
              marginTop={{ marginTop: "6rem" }}
            />
          )}
          <section className={`${s.calendar}`}>
            {/* <h3 className={`${s.h3}`}>Workshop Calendar</h3> */}
            {days.map((day, idx) =>
              <Fragment key={idx}>
                <CalendarWorkshops workshops={day} />
              </Fragment>
            )}
          </section>
        </section>
        <SidebarComponent labels={labels} sidebar={page.sidebar} />
      </div>
    </Layout>
  )
}
