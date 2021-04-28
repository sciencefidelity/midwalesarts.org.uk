import * as React from "react"
import { Link } from "gatsby"
import clientConfig from '../../client-config'
import { GatsbyImage } from "gatsby-plugin-image"
import BasePortableText from '@sanity/block-content-to-react'

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)

const FrontPageSection = ({ 
  title, caption, heading, body, cta, ctaLink, 
  mainImage, mainImageCaption, subImage, subImageCaption 
}) => (
  <section>
    <div className="sectionContainer">
      <>
        <GatsbyImage 
          image={mainImage}
          alt="an image"
          className="sectionHero"
        />
        <div className="sectionHeroCaption caption">{mainImageCaption}</div>
        <div className="sectionContent">
          <div>
            <GatsbyImage 
              image={subImage}
              alt="an image"
              className="sectionInset"
            />
            <div className="caption">{subImageCaption}</div>
          </div>
          <div>
            <div className="sectionTitleContainer">
              <h2>{title}</h2>
              <h3>{caption}</h3>
            </div>
            <div className="sectionText">
              <h4>{heading}</h4>
              {body && 
                <PortableText blocks={body} />}
            </div>
          </div>
        </div>
        <div className="sectionCtaContainer">
          <div className="sectionCtaHr"></div>
          <Link to="/">
            <h2 className="sectionCta"><span>{cta}</span></h2>
          </Link>
        </div>
      </>
    </div>
  </section>
)

export default FrontPageSection
