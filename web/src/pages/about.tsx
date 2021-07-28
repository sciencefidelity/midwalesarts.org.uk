import React, { FC } from "react"
import { StaticQuery, graphql } from "gatsby"

import { AboutQuery } from "../../graphqlTypes"
import Layout from "../components/layout"
import PortableText from "../components/portableText"
import Sidebar from "../components/sidebar"

const AboutPage: FC = () => (
  <>
    <StaticQuery<AboutQuery>
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
  query About {
    sanityPage(title: { en: { eq: "About" } }) {
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

export default AboutPage
