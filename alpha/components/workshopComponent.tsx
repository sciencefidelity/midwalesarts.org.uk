import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { dayToNumber, nextDate } from "lib/dateHelpers"
import { buildURL, subdir } from "lib/utils"
import { GridImage } from "components/gridImage"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { SidebarComponent } from "components/sidebarComponent"
import {
  Workshop,
  Label,
  Navigation,
  Organisation,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/workshop.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  workshop: Workshop
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const WorkshopComponent: FC<Props> = ({
  workshop,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}) => {
  const { locale } = useRouter()
  const pageHead: PageHead = {
    title: workshop.title,
    description: workshop.ogDescription,
    ogTitle: workshop.ogTitle,
    ogDescription: workshop.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildURL(locale, workshop.slug, workshop._type)}`,
    ogImage: workshop.ogImage,
  }
  return (
    <Layout
      heroImage={
        workshop.mainImage?.asset ? workshop.mainImage : settings.ogImage
      }
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
                alt={workshop.title ? workshop.title : ""}
                idx={1}
                image={
                  workshop.mainImage ? workshop.mainImage : settings.ogImage
                }
                postsPerPage={1}
              />
            </div>
            <div className={`${s.headerContent} ${u.grid}`}>
              <h3 className={`${s.type} ${u.uppercase}`}>
                {workshop.category ? workshop.category : labels[51].text}
              </h3>
              <div>
                {workshop.day && (
                  <h2 className={`${s.subtitle}`}>
                    <PostDate
                      date={nextDate(
                        dayToNumber(workshop.day),
                        workshop.frequency
                      )}
                    />
                    {", "}
                    {workshop.startTime.toLowerCase().replace(" ", "")}
                  </h2>
                )}
                {workshop.title && (
                  <h1 className={`${s.h1}`}>{workshop.title}</h1>
                )}
              </div>
              {workshop.briteLink ? (
                <p className={`${s.headerLink}`}>
                  <a
                    href={`${workshop.briteLink}`}
                    target="blank"
                    rel="noreferrer"
                  >
                    {labels[52].text}
                  </a>
                </p>
              ) : (
                <p
                  className={`${s.headerLink}`}
                  dangerouslySetInnerHTML={{ __html: "&nbsp;" }}
                />
              )}
            </div>
          </div>
          <div>
            {workshop.body && (
              <PortableText value={workshop.body} components={components} />
            )}
            <p className={`${s.briteLink} ${u.textCenter}`}>
              {workshop.briteLink && (
                <a
                  href={`${workshop.briteLink}`}
                  target="blank"
                  rel="noreferrer"
                >
                  {labels[52].text}
                </a>
              )}
            </p>
            <div>
              <p className={`${s.backLink} ${u.textCenter}`}>
                <LinkTo href={`/${subdir(locale, workshop._type)}`}>
                  {labels[54].text}
                </LinkTo>
              </p>
            </div>
          </div>
        </div>
        <SidebarComponent labels={labels} sidebar={workshop.sidebar} />
      </div>
    </Layout>
  )
}
