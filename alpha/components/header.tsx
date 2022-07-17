import { useRouter } from "next/router"
import { ColorLogo } from "components/colorLogo"
import { HeroImage } from "components/heroImage"
import { LinkTo } from "components/linkTo"
import { NavComponent } from "components/navComponent"
import { Image, Label, Navigation, PageContext, Settings } from "lib/interfaces"
import s from "styles/header.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  caption?: string
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
  const { locale } = useRouter() as TRouter
  return (
    <>
      <header className={`${s.header} ${u.relative}`}>
        <LinkTo href="/">
          <span className={`${u.srOnly}`}>{labels[0].text}</span>
          <ColorLogo
            alt={settings.title[locale]}
            containerClass="logoContainer"
            logoClass="colorLogo"
          />
        </LinkTo>
        <div
          className={`${s.hero} ${u.relative}`}
          style={{ overflow: "hidden" }}
        >
          {/* TODO: find a way to get an alt text when we aren't passing a caption */}
          <HeroImage alt={caption ?? ""} image={heroImage} />
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

Header.defaultProps = {
  caption: undefined,
}
