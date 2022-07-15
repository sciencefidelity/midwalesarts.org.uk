import { PortableTextComponents } from "@portabletext/react"
import { buildURL } from "lib/utils"
import { LinkTo } from "components/linkTo"

export const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => {
      return (
        <ul
          style={{
            listStyle: "disc",
          }}
        >
          {children}
        </ul>
      )
    },
  },
  listItem: {
    bullet: ({ children }) => {
      return (
        <li
          style={{
            marginBottom: "1rem",
          }}
        >
          {children}
        </li>
      )
    },
  },
  marks: {
    link: ({ value, children }) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noreferrer" : undefined}
        >
          {children}
        </a>
      )
    },
    mailto: ({ value, children }) => {
      return <a href={`mailto:${value?.mailto}`}>{children}</a>
    },
    internalLink: ({ value, children }) => {
      const url = buildURL(
        value?.item.__i18n_lang,
        value?.item.slug,
        value?.item._type
      )
      return <LinkTo href={`/${url}`}>{children}</LinkTo>
    },
  },
}
