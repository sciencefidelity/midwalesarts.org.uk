import React, { FC } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

interface Props {
  heading: string
  eventData: any
  marginTop: object
}

const EventPreview: FC<Props> = ({ heading, eventData, marginTop }) => {
  return (
    <>
      <div className="sidebarContainer" style={marginTop}>
        <div className="portableContainer">
          <p>{heading}</p>
        </div>
      </div>
      <div className="eventsImageGrid">
        {eventData.map((events: any) => (
          <div key={events.node.id} style={{ margin: 0 }}>
            <Link to={`/events/${events.node.slug.en.current}/`}>
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

EventPreview.propTypes = {
  heading: PropTypes.string.isRequired,
  eventData: PropTypes.any.isRequired,
  marginTop: PropTypes.object.isRequired
}

EventPreview.defaultProps = {}

export default EventPreview
