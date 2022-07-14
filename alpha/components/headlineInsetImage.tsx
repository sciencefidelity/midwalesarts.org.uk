import { useState } from "react"
import { urlFor } from "lib/utils"
import { Image } from "lib/interfaces"
import s from "styles/home.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  alt: string
  image: Image
}

export function HeadlineInsetImage({ alt, image }: Props) {
  const [loaded, setLoaded] = useState(false)
  function onLoad() {
    setLoaded(true)
  }

  const hotspot = image.hotspot
  const position = hotspot
    ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
    : "50% 50%"
  return (
    <>
      <div className={`${s.sectionImageContainer} ${u.relative}`}>
        <img
          onLoad={onLoad}
          loading="lazy"
          className={`
            ${s.sectionInset} ${loaded ? s.loaded : null} ${u.relative} ${
            u.cover
          }
          `}
          alt={alt}
          src={urlFor(image)
            .width(340)
            .height(510)
            .auto("format")
            .quality(75)
            .url()}
          srcSet={`${urlFor(image)
            .width(225)
            .height(383)
            .auto("format")
            .quality(70)
            .url()} 225w,
            ${urlFor(image)
              .width(340)
              .height(510)
              .auto("format")
              .quality(60)
              .url()} 340w,
            ${urlFor(image)
              .width(450)
              .height(766)
              .auto("format")
              .quality(60)
              .url()} 450w
          `}
          width={340}
          height={510}
          style={{
            objectPosition: position,
          }}
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
            style={{
              objectPosition: position,
            }}
          />
        </div>
      </div>
    </>
  )
}
