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

const Home = (postData: Post) => {
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
            <li className={utilStyles.listItem} key={postData.slug.en.current}>
              <Link href={`/posts/${postData.slug.en.current}`}>
                <a>{postData.title.en}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={postData.publishedAt} />
              </small>
            </li>
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
  const post = await client.fetch(postQuery)
  const postData: Post = post
  return {
    props: postData
  }
}
