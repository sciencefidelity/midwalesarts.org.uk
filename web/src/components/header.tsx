import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Navigation from "./navigation"
import HeaderLogo from "./logos/headerLogo"

import "../scss/header.scss"

const Header = () => (
  <>
    <header>
      <div className="hero">
        <StaticQuery
          query={query}
          render={data => (
            <>
              <GatsbyImage 
                image={data.sanityFrontPage.mainImage.asset.gatsbyImageData}
                alt="an image"
                className="heroImage"
              />
              <div className="menuOverlay">
                <Navigation />
              </div>
              <div className="headerContainer">
                <div className="titleContainer">
                  <h2>{data.sanityFrontPage.imageTitle.en}</h2>
                  <h3>{data.sanityFrontPage.imageCaption.en}</h3>
                </div>
                <HeaderLogo />
              </div>
            </>
          )}
        />
      </div>
    </header>
  </>
)

const query = graphql`
  query HeroQuery {
    sanityFrontPage {
      imageTitle {
        en
      }
      imageCaption {
        en
      }
      mainImage {
        asset {
          gatsbyImageData(height: 450, formats: AUTO, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Header
