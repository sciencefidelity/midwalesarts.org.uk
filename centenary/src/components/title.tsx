import * as React from "react"
import PropTypes from "prop-types"

import "../scss/title.scss"

interface Props {
  title: string
  date?: string
}

const Title: React.FC<Props> = ({ title, date }) => {
  return (
    <article className="title">
      <h1>{title}</h1>
      <h2>{date}</h2>
    </article>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default Title
