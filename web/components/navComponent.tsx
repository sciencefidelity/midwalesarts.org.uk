import { FC } from "react"
import { useState } from "react"
import { useRouter } from "next/router"
import { Language } from "components/language"
import { LinkTo } from "components/linkTo"
import { Social } from "components/social"
import { Label, Navigation, PageContext } from "lib/interfaces"
import s from "styles/header.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  pageContext: PageContext
}

export const NavComponent: FC<Props> = ({ labels, navigation, pageContext }) => {
  const router = useRouter()
  const { locale } = router
  const [isActive, setActive] = useState(false)
  const menuOpen = () => {
    setActive(true)
  }
  const menuClose = () => {
    setActive(false)
  }
  let align = { right: "calc(50% - 27rem)" }
  if (locale === "cy") align = { right: "calc(50% - 35.5rem)" }
  return (
    <nav
      className={`${s.navOverlay} ${u.absolute}`}
      onClick={isActive ? menuClose : null}
    >
      <div
        className={`${s.nav} ${isActive ? s.isActive : null} ${u.absolute}`}
      >
        <ul style={align} className={`${s.navList} ${u.absolute} ${u.uppercase}`}>
          {navigation.map(item => (
            <li key={item._key} className={`${s.navItem}`}>
              <LinkTo
                href={`/${item.slug[locale].replace("index", "")}`}
                className={`${s.navLink}`}
              >{item.label[locale]}</LinkTo>
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
          tabIndex={0}
        >
          <span className={`${u.srOnly}`}>{labels[1].text}</span>
          <div
            className={`${s.hamburger} ${isActive ? s.active : null} ${u.relative}`}
          ></div>
        </button>
        <Language pageContext={pageContext} />
        <Social label={labels[3].text} />
      </div>
    </nav>
  )
}
