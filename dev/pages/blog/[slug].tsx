import { GetStaticProps, GetStaticPaths } from "next"
import {useRouter} from "next/router"
import Head from "next/head"
import groq from "groq"
import sanityClient from "@/lib/sanityClient"
import type { Post } from "@/generated/schema"
import BlockContent from "@sanity/block-content-to-react"
import { dateOptions, urlFor } from "@/lib/utils"
import Layout from "@/components/layout"
import utilStyles from "@/styles/utils.module.scss"

const postQuery = groq`
  *[_type == "post" && slug.en.current == $slug][0] {
    body,
    image,
    publishedAt,
    title
  }
`

const Post = ({ post }) => {
  const { locale } = useRouter()
  const {
    body,
    image,
    publishedAt,
    title
  } = post as Post
  return (
    <Layout>
      <Head>
        <title>{locale === "cy" && title.cy ? title.cy : title.en}</title>
      </Head>
      <article>
        <div>
          <img
            src={urlFor(image)
              .width(1440)
              .height(600)
              .auto("format")
              .quality(75)
              .url()}
          />
        </div>
        <h1 className={utilStyles.headingXl}>
          {locale === "cy" && title.cy ? title.cy : title.en}
        </h1>
        <div className={utilStyles.lightText}>
          {new Date(publishedAt).toLocaleDateString(locale, dateOptions)}
        </div>
        <BlockContent
          blocks={locale === "cy" && body.cy ? body.cy : body.en}
          // imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...sanityClient.config()}
        />
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
