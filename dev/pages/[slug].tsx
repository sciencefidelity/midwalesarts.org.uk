import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import sanityClient from "lib/sanityClient"
import type { Page } from "generated/schema"
import { pagePathQuery, pageQuery } from "lib/queries"
import Layout from "components/layout"
import About from "components/about"
import Artists from "components/artists"
import Visit from "components/visit"
// import utilStyles from "styles/utils.module.scss"

const Page = ({ data }) => {
  return (
    <Layout
      heroImage={data.page.heroImage || data.heroArtist.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
    >
      <Head>
        <title></title>
      </Head>
      {
        data.page.template === "page" &&
        <About page={data.page} />
      }
      {
        data.page.template === "visit" &&
        <Visit page={data.page} spaces={data.spaces} />
      }
      {
        data.page.template === "artists" &&
        <Artists page={data.page} artists={data.artists} />
      }
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pagePathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(pageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

export default Page
