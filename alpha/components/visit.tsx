import { Fragment, useState } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { GoogleMap } from "components/googleMap"
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
  Settings,
} from "lib/interfaces"
import s from "styles/visit.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export function Visit({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings,
}: Props) {
  const [quoteNumber, setQuoteNumber] = useState(0)
  const { locale } = useRouter()
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
  return (
    <Layout
      caption={page.mainImage?.caption ?? ""}
      heroImage={page.mainImage?.asset ? page.mainImage : settings.ogImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <section className={`${s.container} ${u.mAuto}`}>
        {page.title && <h1>{page.title}</h1>}
        {page.subtitle && (
          <h2 className={`${s.subtitle}`}>
            {page.subtitle.trim().replace(".", "")}.
          </h2>
        )}
        {page.body && (
          <div className={`${s.info}`}>
            <PortableText value={page.body} components={components} />
          </div>
        )}
        <div className={`${s.spacesGrid} ${u.grid}`}>
          {page.spaces &&
            page.spaces.map((space, idx) => (
              <LinkTo
                href={`#${space.slug}`}
                key={space._id}
                style={{ margin: 0 }}
              >
                <GridImage
                  alt={space.title ?? ""}
                  idx={idx}
                  image={space.mainImage ?? settings.ogImage}
                  postsPerPage={12}
                  top={false}
                />
                {space.title && (
                  <div className={`${s.caption} ${u.textRight}`}>
                    {space.title}
                  </div>
                )}
              </LinkTo>
            ))}
        </div>
        <div className={`${s.spacesTextGrid} ${u.grid}`}>
          {page.spaces?.map(
            (space) =>
              space && (
                <div
                  id={space.slug}
                  style={{ margin: 0 }}
                  key={space._id}
                  className={`${s.text}`}
                >
                  {space.title && <h4>{space.title}</h4>}
                  {space.body && (
                    <PortableText value={space.body} components={components} />
                  )}
                </div>
              )
          )}
        </div>
      </section>
      <section>
        {page.feedback && (
          <div className={`${s.feedback}`}>
            <blockquote>{page.feedback[quoteNumber].quote}</blockquote>
          </div>
        )}
        <nav className={`${u.flex} ${s.quoteBtns}`}>
          {page.feedback?.map((quote, idx) => (
            <Fragment key={quote._key}>
              <button
                onClick={() => setQuoteNumber(idx)}
                type="button"
                className={`
                  ${s.quoteBtn}
                  ${idx === quoteNumber ? s.quoteBtnActive : ""}
                  ${u.pointer}
                `}
              >
                {" "}
                &bull;{" "}
                {/* <span className={`${u.screenReaderText}`}>
                  <Localize data={label.text} />
                </span> */}
              </button>
            </Fragment>
          ))}
        </nav>
      </section>
      <GoogleMap />
    </Layout>
  )
}
