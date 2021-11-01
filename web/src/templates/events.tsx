import React, { FC } from "react"
import { graphql } from "gatsby"

import { EventsQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EventPreview from "../components/eventPreview"

interface Props {
  readonly data: EventsQuery
}

const Events: FC<Props> = ({ data }) => {
  return (
    <Layout
      heroImage={
        data.mainEvents.edges[0] !== undefined
          ? data.mainEvents.edges[0].node.heroImage.asset.gatsbyImageData
          : data.pastEvents.edges[0].node.heroImage.asset.gatsbyImageData
      }
      heroImageCaption={
        data.mainEvents.edges[0] !== undefined
          ? `${data.mainEvents.edges[0].node.title.en}, ${data.mainEvents.edges[0].node.date}`
          : `${data.pastEvents.edges[0].node.title.en}, ${data.pastEvents.edges[0].node.date}`
      }
    >
      <SEO title="Events" />
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Events</h1>
            <p className="sidebarContainer">
              Special events, workshops & performances.
            </p>
          </div>
        </div>
        {data.mainEvents.edges[0] !== undefined ? (
          <EventPreview
            heading="Upcoming events"
            eventData={data.mainEvents.edges}
            marginTop={{ marginTop: `2rem` }}
            grid="pastEventsImageGrid"
          />
        ) : (
          <div className="sidebarContainer" style={{ marginTop: `5rem` }}>
            <div className="portableContainer">
              <p>More events coming soon.</p>
            </div>
          </div>
        )}
        {data.recurringEvents && (
          <EventPreview
            heading="Regular events"
            eventData={data.recurringEvents.edges}
            marginTop={{ marginTop: `6rem` }}
            grid="pastEventsImageGrid"
          />
        )}
        {data.pastEvents && (
          <EventPreview
            heading="Past events"
            eventData={data.pastEvents.edges}
            marginTop={{ marginTop: `6rem` }}
            grid="pastEventsImageGrid"
          />
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Events($currentDate: Date!) {
    mainEvents: allSanityEvent(
      filter: { date: { gte: $currentDate }, recurring: { ne: true } }
      sort: { fields: date, order: ASC }
    ) {
      edges {
        node {
          title {
            en
          }
          body {
            _rawEn(resolveReferences: { maxDepth: 10 })
          }
          briteLink
          date(formatString: "dddd, MMMM Do YYYY")
          id
          mainImage: mainImage {
            asset {
              gatsbyImageData(
                width: 468
                height: 468
                formats: WEBP
                placeholder: BLURRED
              )
            }
          }
          heroImage: mainImage {
            asset {
              gatsbyImageData(
                width: 1440
                formats: WEBP
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
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
    recurringEvents: allSanityEvent(
      filter: { date: { gte: $currentDate }, recurring: {eq: true} }
      sort: { fields: date, order: ASC }
    ) {
      edges {
        node {
          title {
            en
          }
          body {
            _rawEn(resolveReferences: { maxDepth: 10 })
          }
          briteLink
          date(formatString: "dddd, MMMM Do YYYY")
          id
          mainImage: mainImage {
            asset {
              gatsbyImageData(
                width: 468
                height: 468
                formats: WEBP
                placeholder: BLURRED
              )
            }
          }
          heroImage: mainImage {
            asset {
              gatsbyImageData(
                width: 1440
                formats: WEBP
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
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
      filter: { date: { lt: $currentDate }, recurring: {ne: true} }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title {
            en
          }
          body {
            _rawEn(resolveReferences: { maxDepth: 10 })
          }
          briteLink
          date(formatString: "dddd, MMMM Do YYYY")
          id
          mainImage: mainImage {
            asset {
              gatsbyImageData(
                width: 468
                height: 468
                formats: WEBP
                placeholder: BLURRED
              )
            }
          }
          heroImage: mainImage {
            asset {
              gatsbyImageData(
                width: 1440
                formats: WEBP
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
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
