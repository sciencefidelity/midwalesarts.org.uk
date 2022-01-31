import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { notFoundQuery } from "lib/queries"
import Layout from "components/layout"
import Link from "components/link"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(notFoundQuery)
  return {
    props: {
      data
    }
  }
}

const Error = ({ data }) => {
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
          <p>Home</p>
        </Link>
      </div>
    </Layout>
  )
}
export default Error
