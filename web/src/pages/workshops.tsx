import React, { FC } from "react"
import { StaticQuery, graphql } from "gatsby"

import { WorkshopsQuery } from "../../graphqlTypes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import Sidebar from "../components/sidebar"

const WorkshopsPage: FC = () => (
  <>
    <StaticQuery<WorkshopsQuery>
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <SEO title="Workshops" />
          <section>
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>{data.sanityPage.title.en}</h1>
                <p className="subTitle">A space to make art together.</p>
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
  query Workshops {
    sanityPage(title: { en: { eq: "Workshops" } }) {
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

export default WorkshopsPage
