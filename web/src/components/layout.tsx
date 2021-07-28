import React, { FC, ReactNode } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import Scrollup from "./scrollup"

import "../scss/layout.scss"

interface Props {
  children: ReactNode
  heroImage: string
  heroImageCaption: string
}

const Layout: FC<Props> = ({ children, heroImage, heroImageCaption }) => {
  return (
    <>
      <Header heroImage={heroImage} heroImageCaption={heroImageCaption} />

      <main>
        {children}
        <Scrollup />
      </main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroImageCaption: PropTypes.string.isRequired,
}

export default Layout
