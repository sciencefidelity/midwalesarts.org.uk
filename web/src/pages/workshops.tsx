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

const WorkshopsPage = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
          heroTitle={data.sanityPage.title.en}
          heroCaption="Lets make together"
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
  query WorkshopPageQuery {
    sanityPage(title: {en: {eq: "Workshops"}}) {
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

export default WorkshopsPage