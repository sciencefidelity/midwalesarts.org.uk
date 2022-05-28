import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { buildUrl } from "lib/utils"
import { components } from "components/portableTextComponents"
import { LinkTo } from "components/linkTo"
import { Page } from "lib/interfaces"

interface Props {
  page: Page
}

export const Intro: FC<Props> = ({ page }) => {
  const { locale } = useRouter()
  const url = buildUrl(locale, page.ctaLink.slug, page.ctaLink._type)
  return (
    <div className="introText">
      {page.body && (
        <PortableText value={page.body} components={components} />
      )}
      {page.ctaLink &&
        <LinkTo href={url}>
          {page.cta && <h2 className="introCta">{page.cta}&nbsp;</h2>}
        </LinkTo>
      }
      <div className="introCtaHr"></div>
    </div>
  )
}
