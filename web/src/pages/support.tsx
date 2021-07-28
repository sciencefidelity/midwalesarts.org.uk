import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PortableText from "../components/portableText"
import Sidebar from "../components/sidebar"

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
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>{data.sanityPage.title.en}</h1>
                <p className="subTitle">How you can get involved.</p>
                {data.sanityPage.body._rawEn && (
                  <PortableText blocks={data.sanityPage.body._rawEn} />
                )}
              </div>
              <Sidebar />
            </div>
          </section>
        </Layout>
      )}
    />
  </>
)

const query = graphql`
  query Support {
    sanityPage(title: { en: { eq: "Support us" } }) {
      title {
        en
      }
      id
      body {
        _rawEn(resolveReferences: { maxDepth: 10 })
      }
      mainImage {
        asset {
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: WEBP
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
`

export default SupportPage
