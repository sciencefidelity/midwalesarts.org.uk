import { FC, useCallback, useState } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { buildURL, localize, subdir } from "lib/utils"
import { GridImage } from "components/gridImage"
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
  Settings,
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
  settings,
}) => {
  const { locale } = useRouter()
  const [bio, setBio] = useState(!artist.works[0])
  const [gallery, setGallery] = useState(!!artist.works[0])
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
  const prevIndexCallback = useCallback(() => {
    currentIndex -= 1
    if (currentIndex < 0) {
      currentIndex = artist.works.length - 1
    }
    setImageToShow(currentIndex)
  }, [])
  const nextIndexCallback = useCallback(() => {
    currentIndex += 1
    if (currentIndex >= artist.works.length) {
      currentIndex = 0
    }
    setImageToShow(currentIndex)
  }, [])
  const modalImage =
    artist.works[0] !== undefined ? artist.works[imageToShow] : {}
  const blocks = artist.body && artist.body
  const pageHead: PageHead = {
    title: artist.title,
    description: artist.ogDescription,
    ogTitle: artist.ogTitle,
    ogDescription: artist.ogDescription,
    ogURL: `
      ${settings.canonicalURL}
      ${locale === "cy" ? "/cy" : ""}
      /${buildURL(locale, artist.slug, artist._type)}`,
    ogImage: artist.ogImage,
  }
  return (
    <Layout
      caption={artist.mainImage?.caption ?? undefined}
      heroImage={artist.mainImage?.asset ? artist.mainImage : settings.ogImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.container} ${u.grid}`}>
        <div className={`${s.title}`}>
          <h1>{labels[23].text}</h1>
          {artist.title && (
            <h2 className={`${s.subtitle}`}>
              {artist.title.trim().replace(".", "")}.
            </h2>
          )}
          <ul className={`${s.tabs} ${u.flex}`}>
            {artist.works[0] && (
              <li>
                <button
                  onClick={toggleGallery}
                  onKeyDown={toggleGallery}
                  type="button"
                  className={`${s.tabItem} ${u.pointer} ${
                    bio ? undefined : s.selected
                  }`}
                >
                  <h3 className={`${s.h3}`}>{labels[24].text}</h3>
                </button>
              </li>
            )}
            {artist.works[0] && (
              <li>
                <button
                  onClick={toggleBio}
                  onKeyDown={toggleBio}
                  type="button"
                  className={`${s.tabItem} ${bio ? s.selected : undefined} ${
                    u.pointer
                  }`}
                >
                  <h3 className={`${s.h3}`}>{labels[25].text}</h3>
                </button>
              </li>
            )}
          </ul>
          <div className={`${s.info} ${bio ? undefined : s.hidden}`}>
            {artist.body && (
              <PortableText value={blocks} components={components} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${s.imageGrid} ${gallery ? undefined : s.hidden} ${u.grid}`}
      >
        {artist.works[0] ? (
          artist.works.map(
            (artwork, idx) =>
              artwork && (
                <div
                  style={{ margin: 0 }}
                  key={artwork._id}
                  onClick={() => openModal(idx)}
                  className={`${u.pointer}`}
                >
                  {locale && (
                    <GridImage
                      alt={`
                      ${artist.title && `${artist.title}, `}
                      ${artwork.title && `${localize(artwork.title, locale)}, `}
                      ${artwork.date && artwork.date}
                    `}
                      idx={idx}
                      image={artwork.mainImage ?? settings.ogImage}
                      postsPerPage={100}
                    />
                  )}
                  {artwork.title && locale && (
                    <div
                      className={`${s.caption} ${u.textRight} ${u.semibold}`}
                    >
                      {localize(artwork.title, locale)}{" "}
                      {artwork.date && `(${artwork.date})`}
                    </div>
                  )}
                  {(artwork.medium || artwork.price) && locale && (
                    <div className={`${s.caption} ${u.textRight}`}>
                      {artwork.medium &&
                        `${localize(artwork.medium, locale)}, `}
                      {artwork.price}
                    </div>
                  )}
                </div>
              )
          )
        ) : (
          <p>{labels[26].text}</p>
        )}
      </div>
      <div className={`${s.backLink}`}>
        <p className={`${u.textCenter}`}>
          {locale && (
            <LinkTo href={`/${subdir(locale, artist._type)}`}>
              {labels[28].text}
            </LinkTo>
          )}
        </p>
      </div>
      {artist.works[0] !== undefined ? (
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
