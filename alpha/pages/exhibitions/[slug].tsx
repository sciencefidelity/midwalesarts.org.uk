/**
 * Exhibition component (dynamic).
 *
 * @remarks
 * Generates all pages in the subdirectory `/exhibitions`.
 *
 * @param data - all props fetched with `exhibitionPageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `exhibitionPathQuery` in `lib/queries.ts`.
 */
import { useState } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { urlFor } from "lib/utils"
import { exhibitionPathQuery, exhibitionPageQuery } from "lib/queries"
import Layout from "components/layout"
import ErrorTemplate from "components/errorTemplate"
import ExhibitionDate from "components/exhibitionDate"
import Link from "components/link"
import Modal from "components/modal"
import PortableText from "components/portableText"
import { ExhibitionData } from "lib/interfaces"
// TODO: no artworks to show, works, overview hard coded
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(exhibitionPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(exhibitionPageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const ExhibitionPage = ({ data }: { data: ExhibitionData }) => {
  const router = useRouter()
  const { exhibition, menu, site, socialLinks } = data
  const [info, setInfo] = useState(true)
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
  const toggleInfo = () => {
    setInfo(false)
    setGallery(true)
  }
  const toggleGallery = () => {
    setInfo(true)
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
    if (currentIndex > exhibition.artworks.length - 1) {
      setModal(true)
      return
    }
    setImageToShow(currentIndex)
  }
  const modalImage = exhibition.artworks[0] !== undefined ? exhibition.artworks[imageToShow] : {}
  return (
    <Layout
      heroImage={exhibition.mainImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
      title={locale === "cy" && exhibition.title.cy ? exhibition.title.cy : exhibition.title.en}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>
              {locale === "cy" && exhibition.title.cy
                ? exhibition.title.cy
                : exhibition.title.en}
            </h1>
            <p className="subTitle">
              <ExhibitionDate
                dateEnd={exhibition.dateEnd}
                dateStart={exhibition.dateStart}
              />
            </p>
            <ul className="galleryMenu">
              <li onClick={toggleInfo} className={info ? "" : "selected"}>
                {locale === "cy" ? "Trosolwg" : "Overview"}
              </li>
              <li onClick={toggleGallery} className={info ? "selected" : ""}>
                {locale === "cy" ? "Yn gweithio" : "Works"}
              </li>
            </ul>
            <div className={info ? "hidden galleryInfo" : "galleryInfo"}>
              {exhibition.body.en && (
                <PortableText blocks={exhibition.body} />
              )}
            </div>
          </div>
        </div>
        <div
          className={gallery ? "hidden galleryImageGrid" : "galleryImageGrid"}
        >
          {exhibition.artworks ?
            (exhibition.artworks.map((artwork, index) =>
              artwork && (<div
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
                    ${artwork.artist}
                    ${", "}
                    ${locale === "cy" && artwork.title.cy
                  ? artwork.title.cy
                  : artwork.title.en}
                    ${", "}
                    ${artwork.date}
                  `}
                  width={468}
                  height={468}
                />
                <div className="gridCaption">{artwork.artist}</div>
                <div className="gridCaption">
                  <em>
                    {locale === "cy" && artwork.title.cy
                      ? artwork.title.cy
                      : artwork.title.en}
                  </em>
                </div>
              </div>)
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
            <Link href="/exhibitions">
              {locale === "cy"
                ? "Yn ôl i Arddangosfeydd"
                : "Back to Exhibitions"}
            </Link>
          </p>
        </div>
        {exhibition.artworks[0] !== undefined ? (
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
export default ExhibitionPage
