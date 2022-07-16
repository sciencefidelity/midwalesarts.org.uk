import { FC, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { LinkTo } from "components/linkTo"
import { PageContext } from "lib/interfaces"
import s from "styles/header.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  pageContext: PageContext
}

export const Language: FC<Props> = ({ pageContext }) => {
  const isMounted = useRef(false)
  const router = useRouter()
  const { locale = "en", locales = ["en", "cy"] } = router
  const [currentLocale, setCurrentLocale] = useState(locale)
  const langs = ["En", "Cy"]
  function handleLocaleChange(_locale: string) {
    setCurrentLocale(_locale)
  }
  const handleLocaleChangeRef = useRef(handleLocaleChange)
  useEffect(() => {
    handleLocaleChangeRef.current(locale)
    setCurrentLocale(pageContext.localization?.locale)
    return () => {
      isMounted.current = true
    }
  }, [currentLocale, locale, pageContext])
  return pageContext.localization ? (
    <div
      className={`${s.languageSwitcher} ${u.pointer} ${u.inlineBlock} ${u.relative}`}
    >
      {locale === "cy" ? (
        <LinkTo
          href={`/${pageContext.localization.slug
            .join("/")
            .replace("index", "")}`}
          locale={locales[0]}
          onClick={() => handleLocaleChange(locales[0])}
        >
          {langs[0]}
        </LinkTo>
      ) : (
        <LinkTo
          href={`/${pageContext.localization.slug
            .join("/")
            .replace("index", "")}`}
          locale={locales[1]}
          onClick={() => handleLocaleChange(locales[1])}
        >
          {langs[1]}
        </LinkTo>
      )}
    </div>
  ) : (
    <div
      className={`${s.languageSwitcher} ${u.inlineBlock} ${u.relative} ${u.noSelect}`}
      // TODO: make this less dangerous
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: "&nbsp;" }}
    />
  )
}
