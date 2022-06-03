/* eslint indent: "off" */
import { FC, useCallback, useEffect, useState } from "react"
import { urlFor } from "lib/utils"
import { Image } from "lib/interfaces"
import s from "styles/gridImage.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  alt: string
  idx: number
  image: Image
  postsPerPage: number
}

export const GridImage: FC<Props> = ({ alt, idx, image, postsPerPage }) => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    setLoaded(true)
  }, [loaded, onLoad])
  console.log(loaded)
  return (
    <div className={`${s.container} ${u.relative}`}>
      <div className={`${s.imageContainer} ${u.relative}`}>
        <img
          onLoad={onLoad}
          loading={idx < 3 ? "eager" : "lazy"}
          className={`${s.image} ${loaded ? s.loaded : null} ${u.relative} ${u.cover}`}
          alt={alt}
          src={urlFor(image)
            .width(468)
            .height(468)
            .auto("format")
            .quality(75)
            .url()}
          srcSet={
            `${urlFor(image)
              .width(300)
              .height(300)
              .auto("format")
              .quality(70)
              .url()} 300w,
            ${urlFor(image)
              .width(400)
              .height(400)
              .auto("format")
              .quality(70)
              .url()} 400w,
            ${urlFor(image)
              .width(500)
              .height(500)
              .auto("format")
              .quality(70)
              .url()} 500w,
            ${urlFor(image)
              .width(600)
              .height(600)
              .auto("format")
              .quality(70)
              .url()} 600w,
            ${urlFor(image)
              .width(700)
              .height(700)
              .auto("format")
              .quality(70)
              .url()} 700w,
            ${urlFor(image)
              .width(800)
              .height(800)
              .auto("format")
              .quality(70)
              .url()} 800w,
          `}
          height={468}
          width={468}
        />
      </div>
      <div className={`${s.placeholderContainer} ${u.absolute}`}>
        <img
          src={urlFor(image)
            .width(10)
            .height(10)
            .auto("format")
            .quality(5)
            .url()}
          alt=""
          className={`${s.placeholder} ${u.relative} ${u.cover}`}
          width={468}
          height={468}
          loading={idx >= postsPerPage ? "lazy" : "eager"}
        />
      </div>
    </div>
  )
}
