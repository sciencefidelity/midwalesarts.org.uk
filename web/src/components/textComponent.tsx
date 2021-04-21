import * as React from 'react'
import clientConfig from '../../client-config'
import { useStaticQuery, graphql } from 'gatsby'
import BasePortableText from '@sanity/block-content-to-react'

const TextComponent = () => {
  const data = useStaticQuery(graphql`
    query pageQuery {
      sanityPage(title: {en: {eq: "Join and Exhibit"}}) {
        id
        title {
          en
        }
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
      <div>
        <h1>{data.sanityPage.title.en}</h1>
      </div>
      {data.sanityPage.body._rawEn && <PortableText blocks={data.sanityPage.body._rawEn} />}
    </>
  )
}

export default TextComponent
