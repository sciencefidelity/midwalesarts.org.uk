import { FC } from "react"
import { useRouter } from "next/router"
import { ColorLogo } from "components/colorLogo"
import { SanityImage } from "components/sanityImage"
import { LinkTo } from "components/linkTo"
import { NavComponent } from "components/navComponent"
import { Image, Label, Navigation, PageContext } from "lib/interfaces"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  caption: string
  heroImage: Image
  labels: Label[]
  navigation: Navigation[]
  pageContext: PageContext
}

export const Header: FC<Props> = ({
  caption,
  heroImage,
  labels,
  navigation,
  pageContext
}) => {
  const { locale } = useRouter()
  return (
    <>
      <header className={`${s.header}`}>
        <LinkTo href="/">
          <span className={`${u.srOnly}`}>
            {labels[0].text[locale]}
          </span>
          <ColorLogo />
        </LinkTo>
        <div
          className={`${s.hero}`}
          style={{ overflow: "hidden" }}
        >
          <SanityImage alt={caption} image={heroImage} width={1600} />
        </div>
      </header>
      <NavComponent labels={labels} navigation={navigation} pageContext={pageContext} />
      <div className={`${s.heroCaption}`}>{caption}</div>
    </>
  )
}

