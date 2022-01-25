/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */

import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { createClient } from "next-sanity"
import { config } from "@/lib/config"
import { postQuery } from "@/lib/queries"
import type { Post } from "@/generated/schema"
import Date from "@/components/date"
import Layout, { siteTitle } from "@/components/layout"
import utilStyles from "@/styles/utils.module.scss"

const Home = (posts: Post[]) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I&apos;m Matt.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map((post: Post) =>
            <li className={utilStyles.listItem} key={post._id}>
              <Link href="">
                <a>{post.title.en}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={post.publishedAt} />
              </small>
            </li>
          )}
        </ul>
      </section>
    </Layout>
  )
}
export default Home

const client = createClient({
  ...config
})

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await client.fetch(postQuery)
  return {
    props: {
      posts
    }
  }
}
