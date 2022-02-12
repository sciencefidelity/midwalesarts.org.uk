import { PortableTextComponents } from "@portabletext/react"
import Link from "components/link"

export const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => {
      const target = value?.blank ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
          {children}
        </a>
      )
    },
    internalLink: ({value, children}) => {
      console.log(value)
      return (
        <Link href={value?.item.slug}>
          {children}
        </Link>
      )
    }
  }
}
