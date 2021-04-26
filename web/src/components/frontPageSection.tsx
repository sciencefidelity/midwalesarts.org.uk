import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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
          <div className="container">
            <GatsbyImage 
              image={data.sanityFrontPageSection.subImage.asset.gatsbyImageData}
              alt="an image"
              className="sectionInset"
            />
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
