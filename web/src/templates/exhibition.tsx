import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const ExhibitionPage = ({ pageContext }) => (
  <>
    <Layout
      heroImage={pageContext.mainImage}
      heroImageCaption="&nbsp;"
      heroTitle={pageContext.title}
      heroCaption={pageContext.date}
    >
      <section>
        
      </section>
    </Layout>
  </>
)

export default ExhibitionPage
