import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { buildUrl, sortArtists, urlFor } from "@/lib/utils"
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
import s from "styles/artists.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  pageHead: PageHead
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Artists: FC<Props> = ({
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
      caption={page.hero.mainImage.caption}
      heroImage={page.hero.mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          <h1>{page.title}</h1>
          <p className={`${s.subtitle}`}>{page.subtitle}</p>
        </div>
      </div>
      <div className={`${s.imageGrid} ${u.grid}`}>
        {page.artists && sortArtists(page.artists).map(artist => artist &&
          <LinkTo
            href={buildUrl(locale, artist.slug, artist._type)}
            style={{ margin: 0 }}
            key={artist._id}
          >
            <Image
              src={urlFor(artist.mainImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              alt={artist.mainImage.caption}
              width={2000}
              height={2000}
            />
            <div className={`${s.caption}`}>{artist.title}</div>
          </LinkTo>
        )}
      </div>
    </Layout>
  )
}
