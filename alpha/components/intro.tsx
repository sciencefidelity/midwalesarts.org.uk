import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { buildURL } from "lib/utils"
import { components } from "components/portableTextComponents"
import { LinkTo } from "components/linkTo"
import { Page } from "lib/interfaces"
import s from "styles/home.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  page: Page
}

export const Intro: FC<Props> = ({ page }) => {
  const { locale } = useRouter()
  const url = buildURL(locale, page.ctaLink.slug, page.ctaLink._type)
  return (
    <div className={`${s.introText} ${u.relative}`}>
      {page.body && <PortableText value={page.body} components={components} />}
      {page.ctaLink && (
        <LinkTo href={url} tabIndex={-1}>
          {page.cta && (
            <h2
              className={`${s.introCta} ${u.relative} ${u.textRight}`}
              tabIndex={0}
            >
              <span>{page.cta.trim()}&nbsp;</span>
            </h2>
          )}
        </LinkTo>
      )}
      <div className={`${s.introCtaHr} ${u.absolute}`}></div>
    </div>
  )
}
