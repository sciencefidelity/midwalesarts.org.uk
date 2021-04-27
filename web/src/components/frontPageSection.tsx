import * as React from "react"
import clientConfig from '../../client-config'
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import BasePortableText from '@sanity/block-content-to-react'

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)

const FrontPageSection = () => (
  <section>
    <div className="sectionContainer">
    <StaticQuery
      query={query}
      render={data => (
        <>
          <GatsbyImage 
            image={data.sanityFrontPageSection.mainImage.asset.gatsbyImageData}
            alt="an image"
            className="sectionHero"
          />
          <div className="sectionContent">
            <div>
              <GatsbyImage 
                image={data.sanityFrontPageSection.subImage.asset.gatsbyImageData}
                alt="an image"
                className="sectionInset"
              />
              <div className="caption">{data.sanityFrontPageSection.subImage.caption}</div>
            </div>
            <div>
              <div className="sectionTitleContainer">
                <h2>{data.sanityFrontPageSection.title.en}</h2>
                <h3>{data.sanityFrontPageSection.caption.en}</h3>
              </div>
              <h4>{data.sanityFrontPageSection.heading.en}</h4>
              {data.sanityFrontPageSection.body._rawEn && 
                <PortableText blocks={data.sanityFrontPageSection.body._rawEn} />}
            </div>
          </div>
          <div className="sectionCta">
            <div className="ctaHrRight"></div>
            <a href="#">
              <h2 className="ctaRight">{data.sanityFrontPageSection.cta.en}</h2>
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
    sanityFrontPageSection {
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
