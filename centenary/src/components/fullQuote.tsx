import * as React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "../scss/quote.scss"

interface Props {
  quote: string
}

const FullQuote: React.FC<Props> = ({ quote }) => {
  return (
    <article className="quote__full">
      <MDXRenderer>{quote}</MDXRenderer>
    </article>
  )
}

FullQuote.propTypes = {
  quote: PropTypes.string.isRequired,
}

export default FullQuote
