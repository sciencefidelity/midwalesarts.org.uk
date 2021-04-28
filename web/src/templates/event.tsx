import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const EventPage = ({ pageContext }) => (
  <>
    <Layout
      heroImage={pageContext.mainImage}
      heroImageCaption="&nbsp;"
      heroTitle={pageContext.date}
      heroCaption="&nbsp;"
    >
      <section>
        
      </section>
    </Layout>
  </>
)

export default EventPage
