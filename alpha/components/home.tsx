import { FC } from "react"
import { useRouter } from "next/router"
import { urlFor } from "lib/utils"
import { ColorLogo } from "components/colorLogo"
import { BrandCy, BrandEn } from "components/brand"
import { FrontPageHeadline } from "components/frontPageHeadline"
import { Intro } from "components/intro"
import { Layout } from "components/layout"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  Settings
} from "lib/interfaces"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Home: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  const { locale } = useRouter()
  const dynamicGap = { gap: `${locale === "cy" ? "8.2rem" : "9.4rem"}` }
  return (
    <Layout
      caption={page.mainImage.caption}
      heroImage={page.mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    >
      <section>
        <div className="container">
          <div style={dynamicGap} className="introduction">
            <div className="introBranding">
              {/* <ColorLogo
                logoClass="introLogo"
                containerClass="introLogoContainer"
              /> */}
              <ColorLogo alt="" />
              {locale === "cy" ? <BrandCy /> : <BrandEn />}
            </div>
            <Intro page={page} />
            <div className="sideImageContainer">
              <img
                src={urlFor(page.subImage)
                  .width(406)
                  .height(300)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={page.subImage.caption}
                width={406}
                height={300}
                className={"sideImage"}
              />
              <div>{page.subImage.caption}</div>
            </div>
          </div>
        </div>
      </section>
      {page.headlines.map(headline => (
        <section key={headline._id}>
          <FrontPageHeadline headline={headline} />
        </section>
      ))}
    </Layout>
  )
}
