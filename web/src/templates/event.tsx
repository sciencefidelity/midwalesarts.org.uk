import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

export const query = graphql `
  query SingleEventQuery($slug: String!) {
    sanityEvent(slug: {en: {current: { eq: $slug }}}) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      briteLink
      date(formatString: "dddd, MMMM Do YYYY")
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
    >
      <section>
        <div className="container">
          <h1>{event.title.en}</h1>
          <h3>{event.date}</h3>
          <p><a href="{event.britelink}" target="_blank">Book tickets</a></p>
          {event.body._rawEn && <PortableText blocks={event.body._rawEn} />}
        </div>
      </section>
    </Layout>
  )
}

export default EventPage
