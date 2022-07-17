import { useState } from "react"
import { useRouter } from "next/router"
import { Language } from "components/language"
import { LinkTo } from "components/linkTo"
import { Social } from "components/social"
import { Label, LocaleString, Navigation, PageContext } from "lib/interfaces"
import s from "styles/header.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  pageContext: PageContext
}

export function NavComponent({ labels, navigation, pageContext }: Props) {
  const router = useRouter()
  const { locale = "en" } = router as TRouter
  const [isActive, setActive] = useState(false)
  const menuOpen = () => {
    setActive(true)
  }
  const menuClose = () => {
    setActive(false)
  }
  const key: keyof LocaleString = locale === "cy" ? "cy" : "en"
  let align = { right: "calc(50% - 27rem)" }
  if (locale === "cy") align = { right: "calc(50% - 35.5rem)" }
  return (
    // TODO: fix these a11y issues
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <nav
      className={`${s.navOverlay} ${u.absolute}`}
      onClick={isActive ? menuClose : undefined}
      onKeyDown={isActive ? menuClose : undefined}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <div className={`${s.nav} ${isActive ? s.isActive : ""} ${u.absolute}`}>
        <ul
          style={align}
          className={`${s.navList} ${u.absolute} ${u.uppercase}`}
        >
          {navigation.map((item) => (
            <li key={item._key} className={`${s.navItem}`}>
              <LinkTo
                href={`/${item.slug[key].replace("index", "")}`}
                className={`${s.navLink}`}
              >
                {item.label[key]}
              </LinkTo>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className={`
            ${s.hamburgerContainer}
            ${u.relative}
            ${u.grid}
            ${u.pointer}
            ${u.outline}
          `}
          onClick={isActive ? menuClose : menuOpen}
          type="button"
          tabIndex={0}
        >
          <span className={`${u.srOnly}`}>{labels[1].text}</span>
          <div
            className={`${s.hamburger} ${isActive ? s.active : ""} ${
              u.relative
            }`}
          />
        </button>
        <Language pageContext={pageContext} />
        <Social label={labels[3].text} />
      </div>
    </nav>
  )
}
