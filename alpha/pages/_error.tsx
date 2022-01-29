import { GetStaticProps } from "next"
import Link from "next/link"
import { notFoundQuery } from "lib/queries"
import sanityClient from "lib/sanityClient"
import Layout from "@/components/layout"
// import utilStyles from "@/styles/utils.module.scss"

const Error = ({ data, statusCode }: {
  data: any
  statusCode: number
}) => {
  return (
    <Layout
      heroImage={data.notFound.mainImage}
      menu={data.menu}
      site={data.site}
      socialLinks={data.socialLinks}
      title={statusCode ? `<h1>: ${statusCode} Not Found</h1>` : "An error occurred"}
    >
      <div
        className="container"
        style={{
          textAlign: "center"
        }}
      >
        {statusCode ? `<h1>: ${statusCode} Not Found</h1>` : "An error occurred"}
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
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
