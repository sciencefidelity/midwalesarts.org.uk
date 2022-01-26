import { GetStaticProps, GetStaticPaths } from "next"
import {useRouter} from "next/router"
import Head from "next/head"
import groq from "groq"
import sanityClient from "@/lib/sanityClient"
import type { Post } from "@/generated/schema"
import { dateOptions } from "@/lib/utils"
import Layout from "@/components/layout"
import utilStyles from "@/styles/utils.module.scss"

const postQuery = groq`
  *[_type == "post" && slug.en.current == $slug][0] {
    body,
    publishedAt,
    title
  }
`

const Post = ({ post }) => {
  const { locale } = useRouter()
  const {
    publishedAt = "Missing date",
    title = "Missing title"
  } = post
  return (
    <Layout>
      <Head>
        <title>{locale === "en" ? title.locale : title.cy}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          {locale === "en" ? title.en : title.cy}
        </h1>
        <div className={utilStyles.lightText}>
          {new Date(publishedAt).toLocaleDateString(locale, dateOptions)}
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`*[_type == "post" && defined(slug)].slug.en.current`
  const paths: string[] = await sanityClient.fetch(query)
  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const post: Post = await sanityClient.fetch(postQuery, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post
