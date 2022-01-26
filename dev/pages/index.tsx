import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "@/lib/sanityClient"
import type { Post } from "@/generated/schema"
import { postQuery } from "../lib/queries"
import { dateOptions } from "@/lib/utils"
import Layout, { siteTitle } from "@/components/layout"
import utilStyles from "@/styles/utils.module.scss"

const Home = ({ posts }) => {
  const { locale } = useRouter()
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
              <Link href={`/blog/${post.slug.en.current}`}>
                <a>{locale === "cy" && post.title.cy ? post.title.cy : post.title.en}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {new Date(post.publishedAt).toLocaleDateString(locale, dateOptions)}
              </small>
            </li>
          )}
        </ul>
      </section>
    </Layout>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await sanityClient.fetch(postQuery)
  return {
    props: { posts }
  }
}
