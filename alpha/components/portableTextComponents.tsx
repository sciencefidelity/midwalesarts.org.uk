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
      const slug = value?.item.slug && value?.item.slug.en
        ? value?.item.slug.en.current
        : value?.item.slug.current
      let directory = ""
      if (value.item._type === "artist") directory = "artists"
      if (value.item._type === "event") directory = "events"
      if (value.item._type === "exhibition") directory = "exhibitions"
      if (value.item._type === "post") directory = "news"
      if (value.item._type === "video") directory = "videos"
      const url = `/${directory}/${slug}`
      return (
        <Link href={url}>{children}</Link>
      )
    }
  }
}
