import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PortableText from './portableText'

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
  
  return (
    <>
      <div className="introText">
        {data.sanityFrontPage.body._rawEn && <PortableText blocks={data.sanityFrontPage.body._rawEn} />}
        <a href="#"><h2 className="introCta"><span>{data.sanityFrontPage.cta.en}</span></h2></a>
        <div className="introCtaHr"></div>
      </div>
    </>
  )
}

export default Intro
