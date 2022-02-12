import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import Link from "components/link"
import Localize from "components/localize"

const Intro = ({ body, cta, ctaLink }) => {
  const { locale } = useRouter()
  const blocks = locale === "cy" && body.cy ? body.cy : body.en
  return (
    <div className="introText">
      {body && (
        <PortableText value={blocks} components={components} />
      )}
      {ctaLink && (<Link href={`/${ctaLink}/`}>
        <h2 className="introCta">
          <span>{cta && <Localize data={cta} />}&nbsp;</span>
        </h2>
      </Link>)}
      <div className="introCtaHr"></div>
    </div>
  )
}
export default Intro
