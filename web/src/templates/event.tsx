import React, { FC } from "react"
import { graphql, Link } from "gatsby"

import { SingleEventQuery } from "../../graphqlTypes"
import Layout from "../components/layout"
import PortableText from "../components/portableText"
import Sidebar from "../components/sidebar"

interface Props {
  readonly data: SingleEventQuery
}

const EventPage: FC<Props> = ({ data }) => {
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
            {event.briteLink && (
              <p>
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  Book tickets
                </a>
              </p>
            )}
            {event.body._rawEn && <PortableText blocks={event.body._rawEn} />}
            {event.briteLink && (
              <p>
                <a href={`${event.briteLink}`} target="blank" rel="noreferrer">
                  Book tickets
                </a>
              </p>
            )}
            <div>
              <p className="backLink">
                <Link to="/events/">Back to Events</Link>
              </p>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SingleEvent($slug: String!) {
    sanityEvent(slug: { en: { current: { eq: $slug } } }) {
      body {
        _rawEn(resolveReferences: { maxDepth: 10 })
      }
      briteLink
      date(formatString: "dddd, MMMM Do YYYY")
      id
      title {
        en
      }
      mainImage {
        asset {
          gatsbyImageData(
            width: 1440
            formats: WEBP
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
`

export default EventPage
