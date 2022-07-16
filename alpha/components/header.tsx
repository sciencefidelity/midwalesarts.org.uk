import { useRouter } from "next/router"
import { ColorLogo } from "components/colorLogo"
import { HeroImage } from "components/heroImage"
import { LinkTo } from "components/linkTo"
import { NavComponent } from "components/navComponent"
import {
  Image,
  Label,
  LocaleString,
  Navigation,
  PageContext,
  Settings,
} from "lib/interfaces"
import s from "styles/header.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  caption: string
  heroImage: Image
  labels: Label[]
  navigation: Navigation[]
  pageContext: PageContext
  settings: Settings
}

export function Header({
  caption,
  heroImage,
  labels,
  navigation,
  pageContext,
  settings,
}: Props) {
  const { locale } = useRouter()
  const key: keyof LocaleString = locale === "cy" ? "cy" : "en"
  return (
    <>
      <header className={`${s.header} ${u.relative}`}>
        <LinkTo href="/">
          <span className={`${u.srOnly}`}>{labels[0].text}</span>
          <ColorLogo
            alt={settings.title[key]}
            containerClass="logoContainer"
            logoClass="colorLogo"
          />
        </LinkTo>
        <div
          className={`${s.hero} ${u.relative}`}
          style={{ overflow: "hidden" }}
        >
          <HeroImage alt={caption} image={heroImage} />
        </div>
      </header>
      <NavComponent
        labels={labels}
        navigation={navigation}
        pageContext={pageContext}
      />
      <div
        className={`${s.heroCaption} ${u.relative} ${u.textRight}`}
        // TODO: make this less dangerous
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: caption ?? "&nbsp;" }}
      />
    </>
  )
}
