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
import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import { dateOptionsShort, urlFor } from "lib/utils"
// import type { Post } from "generated/schema"
import { exhibitionPathQuery, exhibitionPageQuery } from "lib/queries"
import Layout from "components/layout"
import Modal from "components/modal"
// import utilStyles from "@/styles/utils.module.scss"

const PostPage = ({ data }) => {
  const { locale } = useRouter()
  const exhibition = data.exhibition
  const artworks = data.exhibition.artworks
  const [info, setInfo] = useState(artworks.length > 0)
  const [gallery, setGallery] = useState(artworks.length <= 0)
  const [modal, setModal] = useState(true)
  const [imageToShow, setImageToShow] = useState(0)
  const modalImage = artworks[0] !== undefined ? artworks[imageToShow] : ""
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
    if (currentIndex >= artworks.length) {
      setModal(true)
      return
    }
    setImageToShow(currentIndex)
  }
  return (
    <Layout
      heroImage={exhibition.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
    >
      <Head>
        <title>
          {locale === "cy" && exhibition.title.cy ?
            exhibition.title.cy :
            exhibition.title.en
          }
        </title>
      </Head>
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>
              {locale === "cy" && exhibition.title.cy ?
                exhibition.title.cy :
                exhibition.title.en
              }
            </h1>
            <p className="subTitle">
              {new Date(exhibition.dateStart)
                .toLocaleDateString(locale, dateOptionsShort)
              }
              {" "}to{" "}
              {new Date(exhibition.dateEnd)
                .toLocaleDateString(locale, dateOptionsShort)
              }
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
                <BlockContent
                  blocks={
                    locale === "cy" && exhibition.body.cy ?
                    exhibition.body.cy :
                    exhibition.body.en
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
          {artworks[0] !== undefined ? (
            artworks.map((artwork: any, index: number) => (
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
                    ${locale === "cy" && artwork.title.cy ?
                      artwork.title.cy :
                      artwork.title.en
                    }
                    ${", "}
                    ${artwork.date}`
                  }
                  width={468}
                  height={468}
                />
                <div className="gridCaption">{artwork.artist}</div>
                <div className="gridCaption">
                  <em>
                    {locale === "cy" && artwork.title.cy ?
                      artwork.title.cy :
                      artwork.title.en
                    }
                  </em>
                </div>
              </div>
            ))
          ) : (
            <p>
              {locale === "cy" ?
                "Dim gweithiau celf i'w dangos" :
                "No artworks to show"
              }
            </p>
          )}
        </div>
        <div>
          <p className="backLink">
            <Link href="/exhibitions">
              <a>
                {locale === "cy" ?
                  "Yn ôl i Arddangosfeydd" :
                  "Back to Exhibitions"
                }
              </a>
            </Link>
          </p>
        </div>
        {artworks[0] !== undefined ? (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(exhibitionPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: false
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

export default PostPage
