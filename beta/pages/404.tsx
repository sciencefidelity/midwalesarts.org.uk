import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { notFoundQuery } from "lib/queries"
import Layout from "components/layout"
import Link from "components/link"
import { AllPageData } from "lib/interfaces"
// TODO: Hardcoded translations
export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(notFoundQuery)
  return {
    props: {
      data
    }
  }
}

const Error = ({ data }: { data: AllPageData }) => {
  const { locale } = useRouter()
  const { menu, site, socialLinks } = data
  return (
    <Layout
      caption={" "}
      heroImage={site.seoImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
      title="404 not found"
    >
      <div
        className="container"
        style={{
          textAlign: "center"
        }}
      >
        <h1>{locale === "cy" ? "404 ddim ar gael" : "404 not found"}</h1>
        <p>
          {locale === "cy"
            ? "Rydych wedi dewis llwybr nad yw ar gael."
            : "You’ve hit a route that doesn’t exist."}
        </p>
        <Link href="/">
          <p>{locale === "cy" ? "Cartref" : "Home"}</p>
        </Link>
      </div>
    </Layout>
  )
}
export default Error
