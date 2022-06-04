/* eslint indent: "off" */
import { FC, useCallback, useEffect, useState } from "react"
import { urlFor } from "lib/utils"
import { Image } from "lib/interfaces"
import s from "styles/home.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  alt: string
  image: Image
}

export const InsetImage: FC<Props> = ({ alt, image }) => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    setLoaded(true)
  }, [loaded, onLoad])
  return (
    <>
      <div className={`${s.imageContainer} ${u.relative}`}>
        <img
          onLoad={onLoad}
          loading="lazy"
          className={`
            ${s.image} ${loaded ? s.loaded : null} ${u.relative} ${u.cover}
          `}
          alt={alt}
          src={urlFor(image)
            .width(429)
            .height(317)
            .auto("format")
            .quality(75)
            .url()}
          srcSet={
            `${urlFor(image)
              .width(400)
              .auto("format")
              .quality(70)
              .url()} 400w,
            ${urlFor(image)
              .width(500)
              .height(317)
              .auto("format")
              .quality(70)
              .url()} 500w,
            ${urlFor(image)
              .width(600)
              .auto("format")
              .quality(70)
              .url()} 600w,
            ${urlFor(image)
              .width(800)
              .auto("format")
              .quality(70)
              .url()} 800w,
            ${urlFor(image)
              .width(1000)
              .auto("format")
              .quality(70)
              .url()} 1000w,
            ${urlFor(image)
              .width(1200)
              .auto("format")
              .quality(70)
              .url()} 1200w,
            ${urlFor(image)
              .width(1500)
              .auto("format")
              .quality(70)
              .url()} 1500w,
            ${urlFor(image)
              .width(1800)
              .auto("format")
              .quality(70)
              .url()} 1800w
          `}
          width={429}
          height={317}
        />
      </div>
      <div className={`${s.placeholderContainer} ${u.absolute}`}>
        <img
          src={urlFor(image)
            .width(21)
            .height(16)
            .auto("format")
            .quality(5)
            .url()}
          alt=""
          className={`${s.sideImage} ${s.placeholder} ${u.relative} ${u.cover}`}
          width={429}
          height={317}
          loading="eager"
        />
      </div>
    </>
  )
}
