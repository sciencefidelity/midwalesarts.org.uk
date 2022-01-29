import { GetStaticProps } from "next"
import Link from "next/link"
import { notFoundQuery } from "lib/queries"
import sanityClient from "lib/sanityClient"
import Layout from "@/components/layout"
// import utilStyles from "@/styles/utils.module.scss"

const Error = ({ data }: {
  data?: any
}) => {
  return (
    <Layout
      heroImage={data.notFound.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
      title="404 not found"
    >
      <div
        className="container"
        style={{
          textAlign: "center"
        }}
      >
        <h1>404 not found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link href="/">
          <a>
            <p>Home</p>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(notFoundQuery)
  return {
    props: {
      data
    }
  }
}

export default Error
