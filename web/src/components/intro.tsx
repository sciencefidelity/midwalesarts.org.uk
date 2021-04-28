import * as React from "react"
import clientConfig from '../../client-config'
import { useStaticQuery, graphql } from 'gatsby'
import BasePortableText from '@sanity/block-content-to-react'

import DoubleRight from "./logos/doubleRight"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query introQuery {
      sanityFrontPage {
        body {
          _rawEn(resolveReferences: {maxDepth: 10})
        }
        cta {
          en
        }
        ctaLink
      }
    }
  `)
  
  const PortableText = ({blocks}) => (
    <BasePortableText blocks={blocks} {...clientConfig.sanity} />
  )
  return (
    <>
      <div className="introText">
        {data.sanityFrontPage.body._rawEn && <PortableText blocks={data.sanityFrontPage.body._rawEn} />}
        <a href="#"><h2 className="cta">{data.sanityFrontPage.cta.en}</h2></a>
        <div className="ctaHr"></div>
      </div>
    </>
  )
}

export default Intro
