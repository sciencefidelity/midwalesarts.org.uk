import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl, sortArtists } from "@/lib/utils"
import { GridImage } from "components/gridImage"
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
  const count = page.artists.filter(e => e.permanent).length
  return (
    <Layout
      caption={page.hero.mainImage?.caption ? page.hero.mainImage.caption : null}
      heroImage={page.hero.mainImage?.asset ? page.hero.mainImage : settings.ogImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          {page.title && <h1>{page.title}</h1>}
          {page.subtitle && <h2 className={`${s.subtitle}`}>
            {page.subtitle.trim().replace(".", "")}.
          </h2>}
        </div>
      </div>
      <div className={`${s.container} ${u.grid}`} style={{marginTop: "2rem"}}>
        <div className={`${s.title}`}>
          <h3 className={`${s.heading}`}>{labels[85].text}</h3>
        </div>
      </div>
      <div className={`${s.imageGrid} ${u.grid} ${count < 3 && s.twoCols} `}>
        {page.artists && sortArtists(page.artists).map((artist, idx) => artist.permanent &&
          <LinkTo
            href={buildUrl(locale, artist.slug, artist._type)}
            style={{ margin: 0 }}
            key={artist._id}
          >
            <GridImage
              alt={artist?.mainImage?.caption ? artist?.mainImage?.caption: ""}
              idx={idx}
              image={artist.mainImage?.asset ? artist.mainImage : settings.ogImage}
              postsPerPage={100}
            />
            {artist.title && <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
              {artist.title}
            </div>}
            {artist.disciplines && <div className={`${s.caption} ${u.textRight}`}>
              {artist.disciplines.sort().join(", ")}
            </div>}
          </LinkTo>
        )}
      </div>
      <div className={`${s.container} ${u.grid}`} style={{marginTop: "2rem"}}>
        <div className={`${s.title}`}>
          <h3 className={`${s.heading}`}>{labels[86].text}</h3>
        </div>
      </div>
      <div className={`${s.imageGrid} ${u.grid}`}>
        {page.artists && sortArtists(page.artists).map((artist, idx) => !artist.permanent &&
          <LinkTo
            href={buildUrl(locale, artist.slug, artist._type)}
            style={{ margin: 0 }}
            key={artist._id}
          >
            <GridImage
              alt={artist?.mainImage?.caption ? artist?.mainImage?.caption: ""}
              idx={idx}
              image={artist.mainImage?.asset ? artist.mainImage : settings.ogImage}
              postsPerPage={100}
              top={false}
            />
            {artist.title && <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
              {artist.title}
            </div>}
            {artist.disciplines && <div className={`${s.caption} ${u.textRight}`}>
              {artist.disciplines.sort().join(", ")}
            </div>}
          </LinkTo>
        )}
      </div>
    </Layout>
  )
}
