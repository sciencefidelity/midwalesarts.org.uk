import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { urlFor } from "lib/utils"
import { GoogleMap } from "components/googleMap"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  PageHead,
  Settings
} from "lib/interfaces"
import s from "styles/visit.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Visit: FC<Props> = ({
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
  return (
    <Layout
      caption={page.mainImage.caption}
      heroImage={page.mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <section className={`${s.container} ${u.mAuto}`}>
        {page.title && <h1>{page.title}</h1>}
        {page.subtitle && <h2 className={`${s.subtitle}`}>
          {page.subtitle.trim().replace(".", "")}.
        </h2>}
        <div className={`${s.spacesGrid} ${u.grid}`}>
          {page.spaces && page.spaces.map(space => (
            <LinkTo
              href={`#${space.slug}`}
              key={space._id}
              style={{ margin: 0 }}
            >
              <Image
                src={urlFor(space.mainImage)
                  .width(468)
                  .height(468)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={space.title}
                width={2000}
                height={2000}
              />
              {space.title && <div className={`${s.caption} ${u.textRight}`}>
                {space.title}
              </div>}
            </LinkTo>
          ))}
        </div>
        <div className={`${s.spacesTextGrid} ${u.grid}`}>
          {page.spaces.map(space => (
            space && (
              <div
                id={space.slug}
                style={{ margin: 0 }}
                key={space._id}
                className={`${s.text}`}
              >
                {space.title && <h4>{space.title}</h4>}
                {space.body &&
                  <PortableText value={space.body} components={components} />
                }
              </div>
            )
          ))}
        </div>
      </section>
      <GoogleMap />
    </Layout>
  )
}
