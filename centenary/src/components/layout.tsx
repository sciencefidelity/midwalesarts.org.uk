import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../scss/layout.scss"

interface Props {
  children: React.ReactNode
  image: any
  alt: string
  fit?: any
}

const Layout: React.FC<Props> = ({ children, image, alt }) => {
  return (
    <>
      <Header image={image} alt={alt} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  fit: PropTypes.any
}

export default Layout
