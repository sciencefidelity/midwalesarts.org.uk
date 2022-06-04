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

export const HeadlineInsetImage: FC<Props> = ({ alt, image }) => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    setLoaded(true)
  }, [loaded, onLoad])
  return (
    <>
      <div className={`${s.sectionImageContainer} ${u.relative}`}>
        <img
          onLoad={onLoad}
          loading="lazy"
          className={`
            ${s.sectionInset} ${loaded ? s.loaded : null} ${u.relative} ${u.cover}
          `}
          alt={alt}
          src={urlFor(image)
            .width(340)
            .height(510)
            .auto("format")
            .quality(75)
            .url()}
          srcSet={
            `${urlFor(image)
              .width(225)
              .height(383)
              .auto("format")
              .quality(70)
              .url()} 225w,
            ${urlFor(image)
              .width(340)
              .height(510)
              .auto("format")
              .quality(70)
              .url()} 340w,
            ${urlFor(image)
              .width(450)
              .height(766)
              .auto("format")
              .quality(70)
              .url()} 450w,
            ${urlFor(image)
              .width(680)
              .height(1020)
              .auto("format")
              .quality(70)
              .url()} 680w,
            ${urlFor(image)
              .width(1020)
              .height(1530)
              .auto("format")
              .quality(70)
              .url()} 1020w
          `}
          width={340}
          height={510}
        />
        <div className={`${s.sectionPlaceholderContainer} ${u.absolute}`}>
          <img
            src={urlFor(image)
              .width(17)
              .height(25)
              .auto("format")
              .quality(5)
              .url()}
            alt=""
            className={`${s.placeholder} ${u.relative} ${u.cover}`}
            width={340}
            height={510}
            loading="eager"
          />
        </div>
      </div>
    </>
  )
}
