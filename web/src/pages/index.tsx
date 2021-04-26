import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "../scss/index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Brand from "../components/brand.en"
import Intro from "../components/intro"
import ColorLogo from "../components/logos/colorLogo"

const IndexPage = () => (
  <>
    <Layout>
    <SEO title="Home" />
      <div className="container">
        <ColorLogo />
        <div className="introduction">
          <Brand />
          <StaticQuery
            query={query}
            render={data => (
              <>
                <div className="sideImageContainer">
                  <GatsbyImage 
                    image={data.sanityFrontPage.subImage.asset.gatsbyImageData}
                    alt="an image"
                    className="sideImage"
                  />
                  <div>{data.sanityFrontPage.subImage.caption}</div>
                </div>
              </>
            )}
          />
          <Intro />
        </div>
      </div>
    </Layout>
  </>
)

const query = graphql`
  query ImageQuery {
    sanityFrontPage {
      subImage {
        caption
        asset {
          gatsbyImageData(height: 300, formats: AUTO, placeholder: BLURRED)
        }
      }
    }
  }
`

export default IndexPage
