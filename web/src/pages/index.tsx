import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoEmbed from "../components/videoEmbed"
import TextComponent from "../components/textComponent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="container">
        <div className="container">
        <h1 className="brand">Mid</h1>
        <h1 className="brand">Wales</h1>
        <h1 className="brand bold">Arts</h1>
      </div>
      <VideoEmbed />
      <TextComponent />
    </div>
  </Layout>
)

export default IndexPage
