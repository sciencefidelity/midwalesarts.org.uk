import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Layout from "@/components/layout"
import { createClient } from "next-sanity"
import { config } from "@/lib/config"
import type { Post } from "@/generated/schema"
// import { getAllPostIds, getPostData } from "@/lib/posts"
import Date from "@/components/date"
import utilStyles from "@/styles/utils.module.scss"
import { postQuery } from "@/lib/queries"

const Post = ({
  postData,
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
export default Post

const client = createClient({
  ...config
})

{/* export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
} */}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await client.fetch(postQuery)
  const { title, publishedAt, author, categories, body }: Post = post
  return {
    props: { title, publishedAt, author, categories, body }
  }
}
