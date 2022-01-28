/**
 * Artist component (dynamic).
 *
 * @remarks
 * Generates all pages in the subdirectory `/artists`.
 *
 * @param data - all props fetched with `artistPageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `artistPathQuery` in `lib/queries.ts`.
 */
import { useState } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import { urlFor } from "lib/utils"
// import type { Post } from "generated/schema"
import { artistPathQuery, artistPageQuery } from "lib/queries"
import Layout from "components/layout"
import Modal from "components/modal"
// import utilStyles from "@/styles/utils.module.scss"

const Artist = ({ data }) => {
  const { locale } = useRouter()
  const [bio, setBio] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [modal, setModal] = useState(true)
  const [imageToShow, setImageToShow] = useState(0)
  const toggleBio = () => {
    setBio(false)
    setGallery(true)
  }
  const toggleGallery = () => {
    setBio(true)
    setGallery(false)
  }
  const openModal = (index: number) => {
    setModal(false)
    setImageToShow(index)
  }
  const closeModal = () => {
    setModal(true)
  }
  let currentIndex = imageToShow
  function prevIndex() {
    currentIndex = currentIndex - 1
    if (currentIndex < 0) {
      setModal(true)
      return
    }
    setImageToShow(currentIndex)
  }
  function nextIndex() {
    currentIndex = currentIndex + 1
    if (currentIndex > data.artist.artworks.length - 1) {
      setModal(true)
      return
    }
    setImageToShow(currentIndex)
  }
  const artist = data.artist
  const artworks = data.artist.artworks
  const modalImage = artworks[imageToShow]

  return (
    <Layout
      heroImage={data.artist.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
    >
      <Head>
        <title></title>
      </Head>
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Artist</h1>
            <p className="subTitle">{artist.title}</p>
            <ul className="galleryMenu">
              <li onClick={toggleGallery} className={bio ? "selected" : ""}>
                Works
              </li>
              <li onClick={toggleBio} className={bio ? "" : "selected"}>
                Biography
              </li>
            </ul>
            <div className={bio ? "hidden galleryInfo" : "galleryInfo"}>
              {artist.body && (
                <BlockContent
                  blocks={locale === "cy" &&
                    artist.body.cy ?
                    artist.body.cy :
                    artist.body.en
                  }
                  {...sanityClient.config()}
                />
              )}
            </div>
          </div>
        </div>
        <div
          className={gallery ? "hidden galleryImageGrid" : "galleryImageGrid"}
        >
          {!!artist.artworks &&
            artist.artworks.map(
              (artwork: any, index: number) =>
                !!artwork && (
                  <div
                    style={{ margin: 0 }}
                    key={artwork._id}
                    onClick={() => openModal(index)}
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
                        ${artwork.title.en}${", "}
                        ${artwork.date}
                      `}
                      width={468}
                      height={468}
                    />
                    <div className="gridCaption">
                      {artwork.title.en}{" "}({artwork.date})
                    </div>
                  </div>
                )
            )}
        </div>
        <div>
          <p className="backLink">
            <Link href="/artists">{"Back to Artists"}</Link>
          </p>
        </div>
        {!!artist.artworks && (
          <Modal
            modal={modal}
            modalImage={modalImage}
            closeModal={closeModal}
            prevIndex={prevIndex}
            nextIndex={nextIndex}
          />
        )}
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(artistPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(artistPageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

export default Artist
