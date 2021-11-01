import React, { FC } from "react"
import { StaticQuery, graphql } from "gatsby"

import { SupportQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import Sidebar from "../components/sidebar"
import "../scss/support.scss"

const SupportPage: FC = () => (
  <>
    <StaticQuery<SupportQuery>
      query={query}
      render={data => (
        <Layout
          heroImage={data.sanityPage.mainImage.asset.gatsbyImageData}
          heroImageCaption="&nbsp;"
        >
          <SEO title={data.sanityPage.title.en} />
          <section>
            <div className="sidebarContainer">
              <div className="portableContainer">
                <h1>{data.sanityPage.title.en}</h1>
                <p className="subTitle">How you can get involved.</p>
                {data.sanityPage.body._rawEn && (
                  <PortableText blocks={data.sanityPage.body._rawEn} />
                )}
                <form>
                  <input type="title" name="title" placeholder="Title" />
                  <input type="firstName" name="firstName" placeholder="First Name" />
                  <input type="surname" name="surname" placeholder="Surname" /><br />
                  <input type="partner" name="name" placeholder="Joint friend’s name (if applicable)" />
                </form>
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
