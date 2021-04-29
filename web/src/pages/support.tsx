import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/artists.scss'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

const SupportPage = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <section>
            <div className="container">
              <h1>{data.sanityPage.title.en}</h1>
              {data.sanityPage.body._rawEn && <PortableText blocks={data.sanityPage.body._rawEn} />}
            </div>
          </section>
        </Layout>
      )}
    />
  </>
)

const query = graphql `
  query SupportPageQuery {
    sanityPage(title: {en: {eq: "Support us"}}) {
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

export default SupportPage
