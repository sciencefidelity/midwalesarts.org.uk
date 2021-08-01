import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

import "../scss/image.scss"

interface Props {
  image: any
  alt: string
  fit?: any
}

const FullImage: React.FC<Props> = ({ image, alt, fit }) => {
  return (
    <article>
      <GatsbyImage
        image={image}
        alt={alt}
        objectFit={fit}
        objectPosition={"50% 0%"}
        className="image--full"
      />
    </article>
  )
}

FullImage.propTypes = {
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  fit: PropTypes.any,
}

FullImage.defaultProps = {
  image: `stefan_sculptures4.jpg`,
  fit: `cover`,
}

export default FullImage
