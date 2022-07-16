import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react"
import { urlFor } from "lib/utils"
import { Image } from "lib/interfaces"
import s from "styles/heroImage.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  alt: string
  image: Image
}

interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  fetchpriority?: string
}

function Img({ alt, ...props }: ImageProps) {
  return <img alt={alt} {...props} />
}

export function HeroImage({ alt, image }: Props) {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    setLoaded(true)
  }, [loaded, onLoad])
  const { hotspot } = image
  const position = hotspot
    ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
    : "50% 50%"
  return (
    <div className={`${u.relative}`}>
      <div className={`${s.imageContainer} ${u.relative}`}>
        <Img
          src={urlFor(image)
            .width(1600)
            .height(450)
            .auto("format")
            .quality(75)
            .url()}
          srcSet={`${urlFor(image)
            .width(400)
            .height(350)
            .auto("format")
            .quality(60)
            .url()} 400w,
            ${urlFor(image)
              .width(800)
              .height(700)
              .auto("format")
              .quality(60)
              .url()} 800w,
            ${urlFor(image)
              .width(1200)
              .height(667)
              .auto("format")
              .quality(60)
              .url()} 1200w,
            ${urlFor(image)
              .width(1620)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 1620w,
            ${urlFor(image)
              .width(1620)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 1620w,
            ${urlFor(image)
              .width(2000)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 2000w,
            ${urlFor(image)
              .width(2500)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 2500w,
            ${urlFor(image)
              .width(3000)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 3000w,
            ${urlFor(image)
              .width(3500)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 3500w,
            ${urlFor(image)
              .width(4000)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 4000w,
            ${urlFor(image)
              .width(5000)
              .height(900)
              .auto("format")
              .quality(60)
              .url()} 5000w
          `}
          alt={alt}
          onLoad={onLoad}
          loading="eager"
          className={`
            ${s.image} ${loaded ? s.loaded : ""} ${u.relative} ${u.cover}
          `}
          width={1600}
          height={450}
          style={{
            objectPosition: position,
          }}
        />
      </div>
      <div className={`${s.placeholderContainer} ${u.absolute}`}>
        <Img
          src={urlFor(image)
            .width(10)
            .height(10)
            .auto("format")
            .quality(5)
            .url()}
          alt=""
          className={`${s.placeholder} ${u.relative} ${u.cover}`}
          width={1600}
          height={450}
          loading="eager"
          fetchpriority="high"
          style={{
            objectPosition: position,
          }}
        />
      </div>
    </div>
  )
}

Img.defaultProps = {
  fetchpriority: undefined,
}
