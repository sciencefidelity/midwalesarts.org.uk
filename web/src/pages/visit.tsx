import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/artists.scss'

import Layout from '../components/layout'
import PortableText from '../components/portableText'

const VisitPage = () => (
  <>
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <section>
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>{data.sanityPage.title.en}</h1>
                <p className="subTitle">What's on offer at Mid Wales Arts.</p>
                {data.sanityPage.body._rawEn && <PortableText blocks={data.sanityPage.body._rawEn} />}
              </div>
              <aside className="sidebar"></aside>
            </div>
          </section>
        </Layout>
      )}
    />
  </>
)

const query = graphql `
  query VisitPageQuery {
    sanityPage(title: {en: {eq: "Visit us"}}) {
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

export default VisitPage
