import { FC, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildUrl, localize, subdir, urlFor } from "lib/utils"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { Modal } from "components/modal"
import {
  Artist,
  Label,
  Navigation,
  Organisation,
  PageContext,
  PageHead,
  Settings
} from "lib/interfaces"
import s from "styles/artist.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  artist: Artist
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  settings: Settings
}

export const ArtistComponent: FC<Props> = ({
  artist,
  labels,
  navigation,
  organisation,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const [bio, setBio] = useState(artist.works[0] ? false : true)
  const [gallery, setGallery] = useState(artist.works[0] ? true : false)
  const [modal, setModal] = useState(false)
  const [imageToShow, setImageToShow] = useState(0)
  const toggleBio = () => {
    setBio(true)
    setGallery(false)
  }
  const toggleGallery = () => {
    setBio(false)
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
      currentIndex = artist.works.length - 1
    }
    setImageToShow(currentIndex)
  }
  function nextIndex() {
    currentIndex = currentIndex + 1
    if (currentIndex > artist.works.length - 1) {
      currentIndex = 0
    }
    setImageToShow(currentIndex)
  }
  const modalImage = artist.works[0] !== undefined
    ? artist.works[imageToShow]
    : {}
  const blocks = artist.body && artist.body
  const pageHead: PageHead = {
    title: artist.title,
    description: artist.ogDescription,
    ogTitle: artist.ogTitle,
    ogDescription: artist.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildUrl(locale, artist.slug, artist._type)}`,
    ogImage: artist.ogImage
  }
  return (
    <Layout
      caption={artist.mainImage.caption}
      heroImage={artist.mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          <h1>{labels[22].text[locale]}</h1>
          {artist.title && <h2 className={`${s.subtitle}`}>
            {artist.title.trim().replace(".", "")}.
          </h2>}
          <ul className={`${s.tabs} ${u.flex}`}>
            <li
              onClick={toggleGallery}
              className={`${s.tabItem} ${bio ? null : s.selected} ${u.pointer}`}
            >
              <h3 className={`${s.h3}`}>{labels[23].text[locale]}</h3>
            </li>
            <li
              onClick={toggleBio}
              className={`${s.tabItem} ${bio ? s.selected : null} ${u.pointer}`}
            >
              <h3 className={`${s.h3}`}>{labels[24].text[locale]}</h3>
            </li>
          </ul>
          <div className={`${s.info} ${bio ? null : s.hidden}`}>
            {artist.body &&
              <PortableText value={blocks} components={components} />
            }
          </div>
        </div>
      </div>
      <div
        className={`${s.imageGrid} ${gallery ? null : s.hidden} ${u.grid}`}
      >
        {artist.works[0] ? (artist.works.map((artwork, index) => artwork &&
          <div
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
                ${artist.title}${", "}
                ${localize(artwork.title, locale)}${", "}
                ${artwork.date}
              `}
              width={2000}
              height={2000}
            />
            {artwork.title && <div className={`${s.caption} ${u.textRight}`}>
              {localize(artwork.title, locale)}{" "}
              {artwork.date && `(${artwork.date})`}
            </div>}
          </div>
        )) : <p>{labels[25].text[locale]}</p>}
      </div>
      <div className={`${s.backLink}`}>
        <p className={`${u.textCenter}`}>
          <LinkTo href={`/${subdir(locale, artist._type)}`}>
            {labels[26].text[locale]}
          </LinkTo>
        </p>
      </div>
      {artist.works[0] !== undefined ? (
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
