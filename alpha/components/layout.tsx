import { FC, ReactNode } from "react"
import { BaseHead } from "components/baseHead"
//import Header from "components/header"
//import Footer from "components/footer"
//import Scrollup from "components/scrollup"
import {
  HeadProps,
  Label,
  Image,
  Navigation,
  Organisation,
  PageContext,
  Settings
} from "lib/interfaces"

interface Props {
  caption: String
  children: ReactNode
  heroImage: Image
  labels: Label[]
  navigation: Navigation[]
  organisation: Organisation
  pageContext: PageContext
  pageHead?: HeadProps
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
  settings
}) => {
  return (
    <div>
      <BaseHead
        pageHead={pageHead}
        settings={settings}
      />
      {/* <Header
        caption={caption}
        heroImage={heroImage}
        labels={labels}
        navigation={navigation}
        pageContext={pageContext}
      /> */}
      <main>
        {children}
        {/* <Scrollup /> */}
      </main>
      {/* <Footer organisation={organisation} settings={settings} /> */}
    </div>
  )
}
