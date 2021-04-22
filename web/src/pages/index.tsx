import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Brand from "../components/brand"
import VideoEmbed from "../components/videoEmbed"
import TextComponent from "../components/textComponent"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
    <div className="container">
      <Brand />
      <VideoEmbed />
      <TextComponent />
    </div>
  </Layout>
)

export default IndexPage
