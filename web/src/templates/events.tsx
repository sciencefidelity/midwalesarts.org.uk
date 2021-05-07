import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import EventPreview from '../components/eventPreview'

const Events = ({ data }) => {
  
  return(
    <Layout
      heroImage={data.eventsMain.edges[0].node.heroImage.asset.gatsbyImageData}
      heroImageCaption={`${data.eventsMain.edges[0].node.title.en}, ${data.eventsMain.edges[0].node.date}`}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Events</h1>
            <p className="sidebarContainer">Special events, workshops & performances.</p>
          </div>
        </div>
        <EventPreview
          heading="Upcoming events"
          eventData={data.eventsMain.edges}
          marginTop={{marginTop: `2rem`}}
        />
        <EventPreview
          heading="Past events"
          eventData={data.pastEvents.edges}
          marginTop={{marginTop: `6rem`}}
        />
      </section>
    </Layout>
  )
}

export const query = graphql `
  query eventsQuery($currentDate: Date!) {
    eventsMain: allSanityEvent(
      filter: {date: {gte: $currentDate}}
      sort: {fields: date, order: ASC}) {
      edges {
        node {
          title {
            en
          }
          body {
            _rawEn(resolveReferences: {maxDepth: 10})
          }
          briteLink
          date(formatString: "dddd, MMMM Do YYYY")
          id
          mainImage: mainImage {
            asset {
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
            }
          }
          heroImage: mainImage {
            asset {
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          slug {
            en {
              current
            }
          }
        }
      }
    }
    pastEvents: allSanityEvent(
      filter: {date: {lt: $currentDate}}
      sort: {fields: date, order: DESC}) {
      edges {
        node {
          title {
            en
          }
          body {
            _rawEn(resolveReferences: {maxDepth: 10})
          }
          briteLink
          date(formatString: "dddd, MMMM Do YYYY")
          id
          mainImage {
            asset {
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
            }
          }
          slug {
            en {
              current
            }
          }
        }
      }
    }
  }
`

export default Events
