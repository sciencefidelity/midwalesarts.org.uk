import React, { FC } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

import PortableText from "./portableText"

interface Props {
  title: string
  caption: string
  heading: string
  body: any
  cta: string
  ctaLink: string
  mainImage: any
  mainImageCaption: string
  subImage: any
  subImageCaption: string
  key: string
}

const FrontPageSection: FC<Props> = (props: any) => (
  <section>
    <div className="sectionContainer">
      <>
        <GatsbyImage
          image={props.mainImage}
          alt={props.mainImageCaption}
          className="sectionHero"
        />
        <div className="sectionHeroCaption caption">
          {props.mainImageCaption}
        </div>
        <div className="sectionContent">
          <div className="sectionInsetImage">
            <GatsbyImage
              image={props.subImage}
              alt={props.subImageCaption}
              className="sectionInset"
            />
            <div className="caption">&nbsp;{props.subImageCaption}</div>
          </div>
          <div>
            <div className="sectionTitleContainer">
              <div>
                <h2>{props.title}</h2>
                <h3>{props.caption}</h3>
              </div>
            </div>
            <div className="sectionText">
              <h4>{props.heading}</h4>
              {props.body && <PortableText blocks={props.body} />}
            </div>
          </div>
        </div>
        <div className="sectionCtaContainer">
          <div className="sectionCtaHr"></div>
          <Link to={`/${props.ctaLink}/`}>
            <h2 className="sectionCta">
              <span>{props.cta}&nbsp;</span>
            </h2>
          </Link>
        </div>
      </>
    </div>
  </section>
)

FrontPageSection.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
}

export default FrontPageSection
