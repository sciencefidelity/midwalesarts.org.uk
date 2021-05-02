import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PortableText from '../components/portableText'
import Sidebar from '../components/sidebar'

const AboutPage = () => (
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
                <p className="subTitle">Welcome to Mid Wales Arts.</p>
                {data.sanityPage.body._rawEn && <PortableText blocks={data.sanityPage.body._rawEn} />}
              </div>
              <Sidebar />
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
