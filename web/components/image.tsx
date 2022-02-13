import { FC } from "react"
import { urlFor } from "lib/utils"
import { ImageProps } from "lib/interfaces"

const Image: FC<ImageProps> = ({ alt, image, width, height }) => {
  const hotspot = image.hotspot
  const position = hotspot
    ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
    : "50% 50%"
  return (
    <img
      src={urlFor(image)
        .auto("format")
        .width(width)
        .height(height)
        .quality(75)
        .url()}
      alt={alt}
      width={width}
      height={height}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        objectPosition: position
      }}
    />
  )
}
export default Image
