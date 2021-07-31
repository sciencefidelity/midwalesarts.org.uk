import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

import "../scss/image.scss"

interface Props {
  image: any
  alt: string
}

const FullImage: React.FC<Props> = ({ image, alt }) => {
  return (
    <article>
      <GatsbyImage
        image={image}
        alt={alt}
        objectPosition={"50% 0%"}
        className="image--full"
      />
    </article>
  )
}

FullImage.propTypes = {
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
}

FullImage.defaultProps = {
  image: `stefan_sculptures4.jpg`,
}

export default FullImage
