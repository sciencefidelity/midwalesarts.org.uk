import { ReactNode } from "react"
import {
  PortableTextComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react"
import { buildURL } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Locale } from "lib/interfaces"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props extends PortableTextMarkComponentProps<any> {
  children: ReactNode
  value?: {
    blank: boolean
    href: string
    mailto: string
    item: {
      __i18n_lang: Locale
      _type: string
      slug: string
    }
  }
}

export const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          listStyle: "disc",
        }}
      >
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        style={{
          marginBottom: "1rem",
        }}
      >
        {children}
      </li>
    ),
  },
  marks: {
    link: ({ children, value }: Partial<Props>) => {
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
    mailto: ({ value, children }: Partial<Props>) => (
      <a href={`mailto:${value?.mailto ?? ""}`}>{children}</a>
    ),
    internalLink: ({ value, children }: Partial<Props>) => {
      const url = buildURL(
        value?.item.__i18n_lang ?? "en",
        value?.item.slug ?? "",
        value?.item._type ?? "page"
      )
      return <LinkTo href={`/${url}`}>{children}</LinkTo>
    },
  },
}
