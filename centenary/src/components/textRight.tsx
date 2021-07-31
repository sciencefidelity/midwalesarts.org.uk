import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "../scss/text.scss"

interface Props {
  text: string
  image: any
  alt: string
}

const TextRight: React.FC<Props> = ({ text, image, alt }) => {
  return (
    <article className="text__right">
      <div className="text__right--col-l">
        <GatsbyImage
          image={image}
          alt={alt}
          objectPosition={"50% 50%"}
          className="text__image"
        />
      </div>
      <div className="text__right--col-r">
        <MDXRenderer>{text}</MDXRenderer>
      </div>
    </article>
  )
}

TextRight.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
}

export default TextRight
