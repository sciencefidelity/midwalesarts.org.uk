import { GetStaticProps } from "next"
import Image from "next/image"
import Head from "next/head"
import { useRouter } from "next/router"
import sanityClient from "@/lib/sanityClient"
import { urlFor } from "@/lib/utils"
import type { FrontPage } from "@/generated/schema"
import { frontPageQuery } from "../lib/queries"
import Layout from "@/components/layout"
import ColorLogo from "@/components/colorLogo"
import BrandEn from "../components/brand.en"
import BrandCy from "../components/brand.cy"
import Intro from "../components/intro"

// import utilStyles from "@/styles/utils.module.scss"

const Home = ({ data }) => {
  const { locale } = useRouter()
  return (
    <Layout
      heroImage={data.frontPage.heroImage}
      menu={data.menu}
    >
      <Head>
        <title></title>
      </Head>
      <section>
        <div className="container">
          <div className="introduction">
            <div className="introBranding">
              <ColorLogo
                logoClass="introLogo"
                containerClass="introLogoContainer"
              />
              {locale === "cy" ? <BrandCy /> : <BrandEn />}
            </div>
            <Intro
              body={data.frontPage.body}
              cta={data.frontPage.cta}
              ctaLink={data.frontPage.ctaLink}
            />
            <div className="sideImageContainer">
              <Image
                src={urlFor(data.frontPage.subImage)
                  .width(812)
                  .height(634)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={data.frontPage.subImage.caption}
                width={812}
                height={634}
              />
              <div>{data.frontPage.subImage.caption}</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data: FrontPage = await sanityClient.fetch(frontPageQuery)
  return {
    props: { data }
  }
}

export default Home
