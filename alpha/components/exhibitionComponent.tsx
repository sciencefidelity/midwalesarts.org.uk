import { FC, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildUrl, localize, subdir, urlFor } from "lib/utils"
import { ExhibitionDate } from "components/date"
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
  Settings
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
  settings
}) => {
  const { locale } = useRouter()
  const [info, setInfo] = useState(
    exhibition.works[0] && exhibition.dateStart < new Date().toISOString()
      ? false : true)
  const [gallery, setGallery] = useState(
    exhibition.works[0] && exhibition.dateStart < new Date().toISOString()
      ? true : false)
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
      /${buildUrl(locale, exhibition.slug, exhibition._type)}`,
    ogImage: exhibition.ogImage
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
  const modalImage = exhibition.works[0] !== undefined
    ? exhibition.works[imageToShow]
    : {}
  return (
    <Layout
      caption={exhibition.mainImage.caption}
      heroImage={exhibition.mainImage}
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
          <h2 className={`${s.subtitle}`}>
            {exhibition.dateStart && exhibition.dateEnd && <ExhibitionDate
              dateEnd={exhibition.dateEnd}
              dateStart={exhibition.dateStart}
            />}
          </h2>
          <ul className={`${s.tabs} ${u.flex}`}>
            <li
              onClick={toggleInfo}
              className={`${s.tabItem} ${info ? s.selected : null} ${u.pointer}`}
            >
              <h3 className={`${s.h3}`}>{labels[34].text[locale]}</h3>
            </li>
            {exhibition.works[0] && exhibition.dateStart < new Date().toISOString() &&
              <li
                onClick={toggleGallery}
                className={`${s.tabItem} ${info ? null : s.selected} ${u.pointer}`}
              >
                <h3 className={`${s.h3}`}>{labels[35].text[locale]}</h3>
              </li>
            }
          </ul>
          <div className={`${s.info} ${info ? null : s.hidden}`}>
            {exhibition.body &&
              <PortableText value={exhibition.body} components={components} />
            }
          </div>
        </div>
      </div>
      <div
        className={`${s.imageGrid}  ${gallery ? null : s.hidden} ${u.grid}`}
      >
        {exhibition.works ?
          (exhibition.works.map((artwork, index) =>
            artwork && (<div
              style={{ margin: 0 }}
              key={artwork._id}
              onClick={() => openModal(index)}
              className={`${u.pointer}`}
            >
              <Image
                src={urlFor(artwork.mainImage)
                  .width(468)
                  .height(468)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={`
                  ${artwork.artist}${", "}
                  ${localize(artwork.title, locale)}${", "}
                  ${artwork.date}
                `}
                width={2000}
                height={2000}
              />
              {artwork.artist && <div className={`${s.caption}`}>
                {artwork.artist}
              </div>}
              {artwork.title && <div className={`${s.caption}`}>
                <em>{localize(artwork.title, locale)}</em>
              </div>}
            </div>)
          )) :
          (<p>
            {labels[36].text[locale]}
          </p>)
        }
      </div>
      <div>
        <p className={`${s.backLink} ${u.textCenter}`}>
          <LinkTo href={`/${subdir(locale, exhibition._type)}`}>
            {labels[38].text[locale]}
          </LinkTo>
        </p>
      </div>
      {exhibition.works[0] !== undefined ? (
        <Modal
          modal={modal}
          modalImage={modalImage}
          closeModal={closeModal}
          prevIndex={prevIndex}
          nextIndex={nextIndex}
        />
      ) : (
        <></>
      )}
    </Layout>
  )
}
