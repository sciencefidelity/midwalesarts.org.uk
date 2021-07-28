import React, { FC } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { IntroQuery } from "../../graphqlTypes"
import PortableText from "./portableText"

const Intro: FC = () => {
  const data: IntroQuery = useStaticQuery(graphql`
    query Intro {
      sanityFrontPage {
        body {
          _rawEn(resolveReferences: { maxDepth: 10 })
        }
        cta {
          en
        }
        ctaLink
      }
    }
  `)

  return (
    <>
      <div className="introText">
        {data.sanityFrontPage.body._rawEn && (
          <PortableText blocks={data.sanityFrontPage.body._rawEn} />
        )}
        <Link to={`/${data.sanityFrontPage.ctaLink}/`}>
          <h2 className="introCta">
            <span>{data.sanityFrontPage.cta.en}&nbsp;</span>
          </h2>
        </Link>
        <div className="introCtaHr"></div>
      </div>
    </>
  )
}

export default Intro
