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
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { urlFor } from "lib/utils"
import { artistPathQuery, artistPageQuery } from "lib/queries"
import Layout from "components/layout"
import ErrorTemplate from "components/errorTemplate"
import Link from "components/link"
import Localize from "components/localize"
import Modal from "components/modal"
import PortableText from "components/portableText"
import { ArtistData } from "lib/interfaces"
// TODO: 'Artst', 'Works', 'Biography' and Backlink hardcoded
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

const ArtistPage = ({ data }: { data: ArtistData }) => {
  const router = useRouter()
  const [bio, setBio] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [modal, setModal] = useState(true)
  const [imageToShow, setImageToShow] = useState(0)
  if(router.isFallback) {
    return (
      <ErrorTemplate />
    )
  }
  if(!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const { locale } = router
  const { artist, menu, site, socialLinks } = data
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
    if (currentIndex > artist.artworks.length - 1) {
      setModal(true)
      return
    }
    setImageToShow(currentIndex)
  }
  const modalImage = artist.artworks[0] !== undefined
    ? artist.artworks[imageToShow]
    : {}
  return (
    <Layout
      caption={artist.mainImage.caption}
      heroImage={artist.mainImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
      title={artist.title}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{locale === "cy" ? "Artistiaid" : "Artist"}</h1>
            <p className="subTitle">{artist.title}</p>
            <ul className="galleryMenu">
              <li onClick={toggleGallery} className={bio ? "selected" : ""}>
                {locale === "cy" ? "Yn gweithio" : "Works"}
              </li>
              <li onClick={toggleBio} className={bio ? "" : "selected"}>
                {locale === "cy" ? "Bywgraffiad" : "Biography"}
              </li>
            </ul>
            <div className={bio ? "hidden galleryInfo" : "galleryInfo"}>
              {artist.body && <PortableText blocks={artist.body} />}
            </div>
          </div>
        </div>
        <div
          className={gallery ? "hidden galleryImageGrid" : "galleryImageGrid"}
        >
          {artist.artworks[0] ?
            (artist.artworks.map((artwork, index) =>
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
                    {artwork.title && <Localize data={artwork.title} />}
                    {" "}
                    {artwork.date && `(${artwork.date})`}
                  </div>
                </div>
              )
            )) :
            (<p>
              {locale === "cy"
                ? "Dim gweithiau celf i'w dangos"
                : "No artworks to show"}
            </p>)
          }
        </div>
        <div>
          <p className="backLink">
            <Link href="/artists">
              {locale === "cy" ? "Yn ôl i Artistiaid" : "Back to Artists"}
            </Link>
          </p>
        </div>
        {artist.artworks[0] !== undefined ? (
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
      </section>
    </Layout>
  )
}
export default ArtistPage
