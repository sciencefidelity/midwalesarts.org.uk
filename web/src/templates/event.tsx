import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import PortableText from '../components/portableText'
import Sidebar from '../components/sidebar'

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

const EventPage = ({ data }) => {
  const event = data && data.sanityEvent
  return (
    <Layout
      heroImage={event.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{event.title.en}</h1>
            <p className="SubTitle">{event.date}</p>
            <p><a href={`${event.briteLink}`} target="_blank">Book tickets</a></p>
            {event.body._rawEn && <PortableText blocks={event.body._rawEn} />}
            <p><a href="{event.britelink}" target="_blank">Book tickets</a></p>
            <div><p className="backLink"><Link to="/events/">Back to Events</Link></p></div>
          </div>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export default EventPage
