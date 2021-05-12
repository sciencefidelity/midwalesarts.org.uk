import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const EventPreview = ({ heading, eventData, marginTop }) => {
  return (
    <>
      <div className="sidebarContainer" style={marginTop}>
        <div className="portableContainer">
          <p>{heading}</p>
        </div>
      </div>
      <div className="eventsImageGrid">
        {eventData.map((events: any) => (
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
    </>
  )
}

export default EventPreview
