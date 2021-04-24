import * as React from "react"
import clientConfig from '../../client-config'
import { useStaticQuery, graphql } from 'gatsby'
import BasePortableText from '@sanity/block-content-to-react'

const Intro = () => {
  const data = useStaticQuery(graphql`
    query introQuery {
      sanityFrontPage {
        body {
          _rawEn(resolveReferences: {maxDepth: 10})
        }
      }
    }
  `)
  
  const PortableText = ({blocks}) => (
    <BasePortableText blocks={blocks} {...clientConfig.sanity} />
  )
  return (
    <>
      <div className="introText">
        <div className="introHr"></div>
        {data.sanityFrontPage.body._rawEn && <PortableText blocks={data.sanityFrontPage.body._rawEn} />}
      </div>
    </>
  )
}

export default Intro
