import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "../scss/text.scss"

interface Props {
  text: string
  image: any
  alt: string
  flow: object
  fit?: any
}

const SplitText: React.FC<Props> = ({ text, image, alt, flow, fit }) => {
  return (
    <article className="text__right" style={flow}>
      <div className="text__right--col-l">
        <GatsbyImage
          image={image}
          alt={alt}
          objectFit={fit}
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

SplitText.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  flow: PropTypes.object.isRequired,
  fit: PropTypes.any,
}

SplitText.defaultProps = {
  fit: `cover`,
}

export default SplitText
