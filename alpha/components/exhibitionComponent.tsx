import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildURL, localize, sortArtworks, subdir } from "lib/utils"
import { ExhibitionDate } from "components/date"
import { GridImage } from "components/gridImage"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { Modal } from "components/modal"
import {
  Exhibition,
  Label,
  Navigation,
  Organisation,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import s from "styles/exhibition.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  exhibition: Exhibition
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export function ExhibitionComponent({
  exhibition,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}: Props) {
  const { locale = "en" } = useRouter()
  const [info, setInfo] = useState(
    !(exhibition.works[0] && exhibition.dateStart < new Date().toISOString())
  )
  const [gallery, setGallery] = useState(
    !!(exhibition.works[0] && exhibition.dateStart < new Date().toISOString())
  )
  const [modal, setModal] = useState(false)
  const [imageToShow, setImageToShow] = useState(0)
  const pageHead: PageHead = {
    title: exhibition.title,
    description: exhibition.ogDescription,
    ogTitle: exhibition.ogTitle,
    ogDescription: exhibition.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildURL(locale, exhibition.slug, exhibition._type)}`,
    ogImage: exhibition.ogImage,
  }
  const toggleInfo = () => {
    setInfo(true)
    setGallery(false)
  }
  const toggleGallery = () => {
    setInfo(false)
    setGallery(true)
  }
  const openModal = (index: number) => {
    setModal(true)
    setImageToShow(index)
  }
  const closeModal = () => {
    setModal(false)
  }

  const prevIndexCallback = useCallback(() => {
    // TODO: this could also be set with refs
    let currentIndex = imageToShow
    currentIndex -= 1
    if (currentIndex < 0) {
      currentIndex = exhibition.works.length - 1
    }
    setImageToShow(currentIndex)
  }, [imageToShow, exhibition.works])
  const nextIndexCallback = useCallback(() => {
    // TODO: this could also be set with refs
    let currentIndex = imageToShow
    currentIndex += 1
    if (currentIndex > exhibition.works.length - 1) {
      currentIndex = 0
    }
    setImageToShow(currentIndex)
  }, [imageToShow, exhibition.works])

  const modalImage =
    exhibition.works[0] !== undefined ? exhibition.works[imageToShow] : {}
  return (
    <Layout
      caption={exhibition.mainImage?.caption ?? undefined}
      heroImage={
        exhibition.mainImage?.asset ? exhibition.mainImage : settings.ogImage
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
          {exhibition.title && <h1>{exhibition.title}</h1>}
          {exhibition.dateStart && exhibition.dateEnd && (
            <h2 className={`${s.subtitle}`}>
              <ExhibitionDate
                dateEnd={exhibition.dateEnd}
                dateStart={exhibition.dateStart}
              />
            </h2>
          )}
          <ul className={`${s.tabs} ${u.flex}`}>
            {exhibition.body && (
              <li>
                <button
                  onClick={toggleInfo}
                  onKeyDown={toggleInfo}
                  type="button"
                  className={`${s.tabItem} ${u.pointer} ${
                    info ? s.selected : ""
                  }`}
                >
                  <h3 className={`${s.h3}`}>{labels[35].text}</h3>
                </button>
              </li>
            )}
            {exhibition.works[0] &&
              exhibition.dateStart < new Date().toISOString() && (
                <li>
                  <button
                    onClick={toggleGallery}
                    onKeyDown={toggleGallery}
                    type="button"
                    className={`${s.tabItem} ${u.pointer} ${
                      info ? "" : s.selected
                    }`}
                  >
                    <h3 className={`${s.h3}`}>{labels[36].text}</h3>
                  </button>
                </li>
              )}
          </ul>
          <div className={`${s.info} ${info ? "" : s.hidden}`}>
            {exhibition.body && (
              <PortableText value={exhibition.body} components={components} />
            )}
          </div>
        </div>
      </div>
      <div className={`${s.imageGrid}  ${gallery ? "" : s.hidden} ${u.grid}`}>
        {exhibition.works ? (
          sortArtworks(exhibition.works).map(
            (artwork, idx) =>
              artwork && (
                <div
                  key={artwork._id}
                  onClick={() => openModal(idx)}
                  onKeyDown={() => openModal(idx)}
                  role="button"
                  tabIndex={0}
                  className={`${u.pointer}`}
                >
                  <GridImage
                    alt={`
                  ${artwork.artist && `${artwork.artist}, `}
                  ${artwork.title && `${localize(artwork.title, locale)}, `}
                  ${artwork.date && artwork.date}
                `}
                    idx={idx}
                    image={artwork.mainImage ?? settings.ogImage}
                    postsPerPage={200}
                  />
                  {artwork.artist && (
                    <div className={`${s.caption} ${u.semibold}`}>
                      {artwork.artist}
                    </div>
                  )}
                  {artwork.title && (
                    <div className={`${s.caption}`}>
                      <em>{localize(artwork.title, locale)}</em>
                    </div>
                  )}
                </div>
              )
          )
        ) : (
          <p>{labels[37].text}</p>
        )}
      </div>
      <div>
        <p className={`${s.backLink} ${u.textCenter}`}>
          <LinkTo href={`/${subdir(locale, exhibition._type)}`}>
            {labels[39].text}
          </LinkTo>
        </p>
      </div>
      {exhibition.works[0] !== undefined ? (
        <Modal
          closeModal={closeModal}
          fallbackImage={settings.ogImage}
          labels={labels}
          modal={modal}
          modalImage={modalImage}
          prevIndex={prevIndexCallback}
          nextIndex={nextIndexCallback}
        />
      ) : (
        <>{}</>
      )}
    </Layout>
  )
}
