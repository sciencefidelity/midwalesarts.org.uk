import React, { FC } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { SiteTitleQuery } from "../../graphqlTypes"
import Header from "./header"
import Footer from "./footer"
import Scrollup from "./scrollup"

import "../scss/layout.scss"

interface Props {
  children: any
  heroImage: any
  heroImageCaption: any
}

const Layout: FC<Props> = ({ children, heroImage, heroImageCaption }) => {
  const data: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
}

export default Layout
