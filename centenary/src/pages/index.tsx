import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Centenary: Stefan Knapp</h1>
    </Layout>
  )
}

export default IndexPage
