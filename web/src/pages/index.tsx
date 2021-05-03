import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../scss/index.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ColorLogo from '../components/logos/colorLogo'
import Brand from '../components/brand.en'
import Intro from '../components/intro'
import FrontPageSection from '../components/frontPageSection'

const IndexPage = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityFrontPage.mainImage.asset.gatsbyImageData}
          heroImageCaption={data.sanityFrontPage.mainImage.caption}
        >
        <SEO title="Home" />
          <section>
            <div className="container">
              <div className="introduction">
                <div className="introBranding">
                  <ColorLogo
                    logoClass = "introLogo"
                    containerClass = "introLogoContainer"
                  />
                  <Brand />
                </div>
                <Intro />
                <div className="sideImageContainer">
                  <GatsbyImage 
                    image={data.sanityFrontPage.subImage.asset.gatsbyImageData}
                    alt="an image"
                    className="sideImage"
                  />
                  <div>{data.sanityFrontPage.subImage.caption}</div>
                </div>
              </div>
            </div>
          </section>
          {data.allSanityFrontPageSection.edges.map((section: any) =>
            <FrontPageSection 
              title={section.node.title.en}
              caption={section.node.caption.en}
              heading={section.node.heading.en}
              body={section.node.body._rawEn}
              cta={section.node.cta.en}
              ctaLink={section.node.ctaLink}
              mainImage={section.node.mainImage.asset.gatsbyImageData}
              mainImageCaption={section.node.mainImage.caption}
              subImage={section.node.subImage.asset.gatsbyImageData}
              subImageCaption={section.node.subImage.caption}
              key={section.node.id}
            />
          )}
        </Layout>
      )}
    />
  </>
)

const query = graphql`
  query ImageQuery {
    sanityFrontPage {
      mainImage {
        caption
        asset {
          gatsbyImageData(height: 450, formats: AUTO, placeholder: BLURRED)
        }
      }
      subImage {
        caption
        asset {
          gatsbyImageData(height: 300, formats: AUTO, placeholder: BLURRED)
        }
      }
    }
    allSanityFrontPageSection(sort: {fields: order, order: ASC}) {
      edges {
        node {
          id
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
            _rawEn
          }
          cta {
            en
          }
          ctaLink
          mainImage {
            caption
            asset {
              gatsbyImageData(width: 1080, formats: WEBP, placeholder: BLURRED)
            }
          }
          subImage {
            caption
            asset {
              gatsbyImageData(width: 1080, formats: WEBP, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
