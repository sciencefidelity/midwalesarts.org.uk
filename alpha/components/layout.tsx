import { FC, ReactNode } from "react"
import { BaseHead } from "components/baseHead"
import { Header } from "components/header"
import { Footer } from "components/footer"
import { Scrollup } from "components/scrollup"
import {
  Label,
  Image,
  Navigation,
  Organisation,
  PageContext,
  PageHead,
  Settings,
} from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  caption?: string
  children: ReactNode
  heroImage: Image
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  pageHead?: PageHead
  settings: Settings
}

export const Layout: FC<Props> = ({
  caption,
  children,
  heroImage,
  labels,
  navigation,
  organisation,
  pageContext,
  pageHead,
  settings,
}) => {
  return (
    <>
      <BaseHead pageHead={pageHead} settings={settings} />
      <Header
        caption={caption}
        heroImage={heroImage}
        labels={labels}
        navigation={navigation}
        pageContext={pageContext}
        settings={settings}
      />
      <div className={`${u.guide} ${u.zero}`}></div>
      <div className={`${u.guide} ${u.one}`}></div>
      <div className={`${u.guide} ${u.two}`}></div>
      <div className={`${u.guide} ${u.three}`}></div>
      <div className={`${u.guide} ${u.four}`}></div>
      <div className={`${u.guide} ${u.five}`}></div>
      <div className={`${u.guide} ${u.six}`}></div>
      <div className={`${u.guide} ${u.seven}`}></div>
      <main>
        {children}
        <Scrollup label={labels[8].text} />
      </main>
      <Footer labels={labels} organisation={organisation} settings={settings} />
    </>
  )
}
