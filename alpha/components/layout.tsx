import { ReactNode } from "react"
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
  LocaleString,
} from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  caption?: LocaleString
  children: ReactNode
  heroImage: Image
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  pageHead?: PageHead
  settings: Settings
}

export function Layout({
  caption,
  children,
  heroImage,
  labels,
  navigation,
  organisation,
  pageContext,
  pageHead,
  settings,
}: Props) {
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
      <div className={`${u.guide} ${u.zero}`} />
      <div className={`${u.guide} ${u.one}`} />
      <div className={`${u.guide} ${u.two}`} />
      <div className={`${u.guide} ${u.three}`} />
      <div className={`${u.guide} ${u.four}`} />
      <div className={`${u.guide} ${u.five}`} />
      <div className={`${u.guide} ${u.six}`} />
      <div className={`${u.guide} ${u.seven}`} />
      <main>
        {children}
        <Scrollup label={labels[8].text} />
      </main>
      <Footer labels={labels} organisation={organisation} settings={settings} />
    </>
  )
}
