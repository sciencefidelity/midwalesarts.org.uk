import { FC, useState } from "react"
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

export const ExhibitionComponent: FC<Props> = ({
  exhibition,
  labels,
  navigation,
  organisation,
  pageContext,
  settings,
}) => {
  const { locale } = useRouter()
  const [info, setInfo] = useState(
    exhibition.works[0] && exhibition.dateStart < new Date().toISOString()
      ? false
      : true
  )
  const [gallery, setGallery] = useState(
    exhibition.works[0] && exhibition.dateStart < new Date().toISOString()
      ? true
      : false
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
  let currentIndex = imageToShow
  function prevIndex() {
    currentIndex = currentIndex - 1
    if (currentIndex < 0) {
      currentIndex = exhibition.works.length - 1
    }
    setImageToShow(currentIndex)
  }
  function nextIndex() {
    currentIndex = currentIndex + 1
    if (currentIndex > exhibition.works.length - 1) {
      currentIndex = 0
    }
    setImageToShow(currentIndex)
  }
  const modalImage =
    exhibition.works[0] !== undefined ? exhibition.works[imageToShow] : {}
  return (
    <Layout
      caption={
        exhibition.mainImage?.caption ? exhibition.mainImage.caption : null
      }
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
              <li
                onClick={toggleInfo}
                className={`${s.tabItem} ${info ? s.selected : null} ${
                  u.pointer
                }`}
              >
                <h3 className={`${s.h3}`}>{labels[35].text}</h3>
              </li>
            )}
            {exhibition.works[0] &&
              exhibition.dateStart < new Date().toISOString() && (
                <li
                  onClick={toggleGallery}
                  className={`${s.tabItem} ${info ? null : s.selected} ${
                    u.pointer
                  }`}
                >
                  <h3 className={`${s.h3}`}>{labels[36].text}</h3>
                </li>
              )}
          </ul>
          <div className={`${s.info} ${info ? null : s.hidden}`}>
            {exhibition.body && (
              <PortableText value={exhibition.body} components={components} />
            )}
          </div>
        </div>
      </div>
      <div className={`${s.imageGrid}  ${gallery ? null : s.hidden} ${u.grid}`}>
        {exhibition.works ? (
          sortArtworks(exhibition.works).map(
            (artwork, idx) =>
              artwork && (
                <div
                  key={artwork._id}
                  onClick={() => openModal(idx)}
                  className={`${u.pointer}`}
                >
                  <GridImage
                    alt={`
                  ${artwork.artist && artwork.artist + ", "}
                  ${artwork.title && localize(artwork.title, locale) + ", "}
                  ${artwork.date && artwork.date}
                `}
                    idx={idx}
                    image={
                      artwork.mainImage ? artwork.mainImage : settings.ogImage
                    }
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
          prevIndex={prevIndex}
          nextIndex={nextIndex}
        />
      ) : (
        <></>
      )}
    </Layout>
  )
}
