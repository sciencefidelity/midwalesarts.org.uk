import { PortableTextComponents } from "@portabletext/react"
import { buildUrl } from "lib/utils"
import { LinkTo } from "components/linkTo"

export const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target} rel={target === "_blank" ? "noreferrer" : undefined}
        >{children}</a>
      )
    },
    internalLink: ({value, children}) => {
      // const url = buildUrl(value?.item)
      const url = value?.item
      return (
        <LinkTo href={url}>{children}</LinkTo>
      )
    }
  }
}
