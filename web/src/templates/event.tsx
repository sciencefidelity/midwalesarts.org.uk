import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql `
  query SingleEventQuery($slug: String!) {
    sanityEvent(slug: {en: {current: { eq: $slug }}}) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      briteLink
      date(formatString: "DDMMYYYY")
      id
      title {
        en
      }
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
    }
  }
`

const EventPage = props => {
  const { data } = props
  const event = data && data.sanityEvent
  return (
    <Layout
      heroImage={event.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
      heroTitle="Event"
      heroCaption={event.title.en}
    >
      <section>
        
      </section>
    </Layout>
  )
}

export default EventPage
