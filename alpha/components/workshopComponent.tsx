import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildUrl, dayToNumber, getNextDate, subdir, urlFor } from "lib/utils"
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
  Settings
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
  settings
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
      /${buildUrl(locale, workshop.slug, workshop._type)}`,
    ogImage: workshop.ogImage
  }
  return (
    <Layout
      heroImage={workshop.mainImage}
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
                src={urlFor(workshop.mainImage)
                  .width(468)
                  .height(468)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={workshop.title}
                width={2000}
                height={2000}
              />
            </div>
            <div className={`${s.headerContent} ${u.grid}`}>
              <h3 className={`${s.type} ${u.uppercase}`}>Club</h3>
              {workshop.day && <h2 className={`${s.subtitle}`}>
                <PostDate date={getNextDate(dayToNumber(workshop.day))} />
              </h2>}
              <h1 className={`${s.h1}`}>{workshop.title}</h1>
              <p className={`${s.headerLink}`}>
                {workshop.briteLink &&
                  <a href={`${workshop.briteLink}`} target="blank" rel="noreferrer">
                    {labels[27].text[locale]}
                  </a>
                }
              </p>
            </div>
          </div>
          <div>
            {workshop.body &&
              <PortableText value={workshop.body} components={components} />
            }
            <p className={`${s.briteLink} ${u.textCenter}`}>
              {workshop.briteLink &&
                <a href={`${workshop.briteLink}`} target="blank" rel="noreferrer">
                  {labels[27].text[locale]}
                </a>
              }
            </p>
            <div>
              <p className={`${s.backLink} ${u.textCenter}`}>
                <LinkTo href={`/${subdir(locale, workshop._type)}`}>
                  {labels[28].text[locale]}
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
