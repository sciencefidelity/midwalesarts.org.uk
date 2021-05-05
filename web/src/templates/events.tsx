import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const Events = ({ data }) => {
  return(
    <Layout
      heroImage={data.eventsHero.edges[0].node.mainImage.asset.gatsbyImageData}
      heroImageCaption={`${data.eventsMain.edges[0].node.title.en}, ${data.eventsMain.edges[0].node.date}`}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>Events</h1>
            <p className="sidebarContainer">Special events, workshops & performances.</p>
          </div>
        </div>
        <div className="sidebarContainer" style={{marginTop: `2rem`}}>
          <div className="portableContainer">
            <p>Upcoming events</p>
          </div>
        </div>
        <div className="eventsImageGrid">
          {data.eventsMain.edges.map((events: any) => (
            <div key={events.node.id} style={{margin: 0}}>
              <Link
                to={`/events/${events.node.slug.en.current}/`}
              >
                <GatsbyImage 
                  image={events.node.mainImage.asset.gatsbyImageData}
                  alt={events.node.title.en}
                  className="gridImage"
                />
                <div className="gridCaption">{events.node.title.en}</div>
                <div className="gridCaption">{events.node.date}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="sidebarContainer" style={{marginTop: `6rem`}}>
          <div className="portableContainer">
            <p>Past events</p>
          </div>
        </div>
        <div className="eventsImageGrid">
          {data.pastEvents.edges.map((events: any) => (
            <div key={events.node.id} style={{margin: 0}}>
              <Link
                to={`/events/${events.node.slug.en.current}/`}
              >
                <GatsbyImage 
                  image={events.node.mainImage.asset.gatsbyImageData}
                  alt={events.node.title.en}
                  className="gridImage"
                />
                <div className="gridCaption">{events.node.title.en}</div>
                <div className="gridCaption">{events.node.date}</div>
              </Link>
            </div>
          ))}
        </div>
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
    eventsHero: allSanityEvent(
      filter: {date: {gte: $currentDate}}
      sort: {fields: date, order: ASC}) {
      edges {
        node {
          mainImage {
            asset {
              gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default Events