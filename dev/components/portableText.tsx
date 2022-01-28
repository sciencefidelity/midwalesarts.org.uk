import React from "react"
import { useRouter } from "next/router"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "lib/sanityClient"
import type { LocaleRichText } from "generated/schema"

const PortableText = ({ blocks }: {
  blocks: LocaleRichText
}) => {
  const { locale } = useRouter()
  return (
    <BlockContent
      blocks={
        locale === "cy" && blocks.cy
          ? blocks.cy
          : blocks.en
      }
      {...sanityClient.config()}
    />
  )
}

export default PortableText
