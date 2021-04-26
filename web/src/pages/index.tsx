import * as React from "react"

import "../scss/index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Brand from "../components/brand.en"
import Intro from "../components/intro"
import ColorLogo from "../components/logos/colorLogo"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
    <div className="container">
      <ColorLogo />
      <div className="introduction">
        <Brand />
        <Intro />
      </div>
    </div>
  </Layout>
)

export default IndexPage
