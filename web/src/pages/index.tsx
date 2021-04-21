import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoEmbed from "../components/videoEmbed"
import TextComponent from "../components/textComponent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <VideoEmbed />
      <TextComponent />
    </div>
  </Layout>
)

export default IndexPage
