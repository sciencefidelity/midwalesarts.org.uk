import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "@/lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"

//import { IntroQuery } from "../../generated/graphqlTypes"
// import PortableText from "./portableText"

const Intro = ({ body, cta, ctaLink }) => {
  const { locale } = useRouter()
  return (
    <div className="introText">
      {body && (
        <BlockContent
          blocks={locale === "cy" && body.cy ? body.cy : body.en}
          {...sanityClient.config()}
        />
      )}
      <Link href={`/${ctaLink}/`}>
        <h2 className="introCta">
          <span>{cta.en}&nbsp;</span>
        </h2>
      </Link>
      <div className="introCtaHr"></div>
    </div>
  )
}

export default Intro
