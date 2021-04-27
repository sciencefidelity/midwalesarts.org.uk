import * as React from "react"
import clientConfig from '../../client-config'
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import BasePortableText from '@sanity/block-content-to-react'

import "../scss/artists.scss"

import Layout from "../components/layout"

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)

const AboutPage = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
          heroTitle="About us"
          heroCaption="Welcome to MWA"
        >
          <section>
            <div className="container">
              {data.sanityPage.body._rawEn && <PortableText blocks={data.sanityPage.body._rawEn} />}
            </div>
          </section>
        </Layout>
      )}
    />
  </>
)

const query = graphql `
  query AboutPageQuery {
    sanityPage(title: {en: {eq: "About"}}) {
      title {
        en
      }
      id
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      mainImage {
        asset {
          gatsbyImageData(width: 1440, placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  }
`

export default AboutPage
