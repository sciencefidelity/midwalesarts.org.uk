import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import groq from "groq"
import sanityClient from "lib/sanityClient"
import type { Post } from "generated/schema"
import { pagePathQuery, pageQuery } from "lib/queries"
import Layout from "components/layout"
import About from "components/about"
import Visit from "components/visit"
// import utilStyles from "styles/utils.module.scss"

const Post = ({ data }) => {
  return (
    <Layout
      heroImage={data.page.heroImage}
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
        data.page.slug.en.current === "visit-us" &&
        <Visit page={data.page} spaces={data.spaces} />
      }
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    groq`*[_type == "page" && defined(slug) && slug.en.current != "index"][].slug.en.current`)
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

export default Post
