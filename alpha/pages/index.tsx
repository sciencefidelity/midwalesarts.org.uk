import { GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { urlFor } from "lib/utils"
import { frontPageQuery } from "lib/queries"
import Layout from "components/layout"
import ColorLogo from "components/colorLogo"
import BrandEn from "components/brand.en"
import BrandCy from "components/brand.cy"
import Intro from "components/intro"
import FrontPageFeature from "components/frontPageFeature"
import { IndexData } from "lib/interfaces"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(frontPageQuery)
  return {
    props: { data }
  }
}

const Home = ({ data }: {
  data: IndexData
}) => {
  const { locale } = useRouter()
  const { featured, frontPage, site, socialLinks, menu } = data
  const dynamicGap = {
    gap: `${locale === "cy" ? "8.2rem" : "9.4rem"}`
  }
  return (
    <Layout
      heroImage={frontPage.mainImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
    >
      <section>
        <div className="container">
          <div style={dynamicGap} className="introduction">
            <div className="introBranding">
              <ColorLogo
                logoClass="introLogo"
                containerClass="introLogoContainer"
              />
              {locale === "cy" ? <BrandCy /> : <BrandEn />}
            </div>
            <Intro
              body={frontPage.body}
              cta={frontPage.cta}
              ctaLink={frontPage.ctaLink}
            />
            <div className="sideImageContainer">
              <Image
                src={urlFor(frontPage.subImage)
                  .width(406)
                  .height(300)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={frontPage.subImage.caption}
                width={406}
                height={300}
                className={"sideImage"}
              />
              <div>{frontPage.subImage.caption}</div>
            </div>
          </div>
        </div>
      </section>
      {featured.map(item => (
        <section key={item._id}>
          <FrontPageFeature feature={item} />
        </section>
      ))}
    </Layout>
  )
}
export default Home
