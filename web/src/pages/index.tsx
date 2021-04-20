import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoEmbed from "../components/videoEmbed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <VideoEmbed />
    </div>
  </Layout>
)

export default IndexPage
