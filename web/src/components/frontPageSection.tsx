import * as React from "react"
import clientConfig from '../../client-config'
import { StaticQuery, graphql } from "gatsby"
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
    <StaticQuery
      query={query}
      render={data => (
        <>
          <GatsbyImage 
            image={mainImage}
            alt="an image"
            className="sectionHero"
          />
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
              <h4>{heading}</h4>
              {body && 
                <PortableText blocks={body} />}
            </div>
          </div>
          <div className="sectionCta">
            <div className="ctaHrRight"></div>
            <a href="#">
              <h2 className="ctaRight">{cta}</h2>
            </a>
          </div>
        </>
      )}
    />
    </div>
  </section>
)

const query = graphql`
  query SectionQuery {
    sanityFrontPageSection(title: {en: {eq: "Stop! Act!"}}) {
      title {
        en
      }
      caption {
        en
      }
      heading {
        en
      }
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      cta {
        en
      }
      mainImage {
        caption
        asset {
          gatsbyImageData(formats: WEBP, width: 1280, placeholder: BLURRED)
        }
      }
      subImage {
        caption
        asset {
          gatsbyImageData(formats: WEBP, width: 300, placeholder: BLURRED)
        }
      }
    }
  }
`

export default FrontPageSection
