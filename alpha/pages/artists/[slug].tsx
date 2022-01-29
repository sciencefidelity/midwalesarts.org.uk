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
import DefaultErrorPage from "next/error"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import { urlFor } from "lib/utils"
import { artistPathQuery, artistPageQuery } from "lib/queries"
import Layout from "components/layout"
import Modal from "components/modal"
import type { Artwork } from "generated/schema"

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(artistPageQuery, { slug })
  return {
    props: {
      data
    }
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(artistPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}

const ArtistPage = ({ data }) => {
  const router = useRouter()
  const [bio, setBio] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [modal, setModal] = useState(true)
  const [imageToShow, setImageToShow] = useState(0)
  if(router.isFallback) {
    return <h1>Loading...</h1>
  }
  if(!data) {
    return <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
  }
  const { locale } = router
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
  const modalImage = data.artist.artworks[0] !== undefined ? data.artist.artworks[imageToShow] : {}

  return (
    <Layout
      heroImage={data.artist.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
      title={data.artist.title}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{locale === "cy" ? "Artistiaid" : "Artist"}</h1>
            <p className="subTitle">{data.artist.title}</p>
            <ul className="galleryMenu">
              <li onClick={toggleGallery} className={bio ? "selected" : ""}>
                {locale === "cy" ? "Yn gweithio" : "Works"}
              </li>
              <li onClick={toggleBio} className={bio ? "" : "selected"}>
                {locale === "cy" ? "Bywgraffiad" : "Biography"}
              </li>
            </ul>
            <div className={bio ? "hidden galleryInfo" : "galleryInfo"}>
              {data.artist.body && (
                <BlockContent
                  blocks={
                    locale === "cy" && data.artist.body.cy
                      ? data.artist.body.cy
                      : data.artist.body.en
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
          {data.artist.artworks &&
            data.artist.artworks.map(
              (artwork: Artwork, index: number) =>
                artwork && (
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
                      {artwork.title.en} {artwork.date && `(${artwork.date})`}
                    </div>
                  </div>
                )
            )}
        </div>
        <div>
          <p className="backLink">
            <Link href="/artists">
              <a>{locale === "cy" ? "Yn ôl i Artistiaid" : "Back to Artists"}</a>
            </Link>
          </p>
        </div>
        {data.artist.artworks && (
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
export default ArtistPage
