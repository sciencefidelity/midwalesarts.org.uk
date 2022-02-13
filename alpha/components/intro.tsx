import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { buildUrl } from "lib/utils"
import { components } from "components/portableTextComponents"
import Link from "components/link"
import Localize from "components/localize"
import { IntroProps } from "lib/interfaces"

const Intro: FC<IntroProps> = ({ body, cta, ctaLink }) => {
  const { locale } = useRouter()
  const blocks = locale === "cy" && body.cy ? body.cy : body.en
  const url = buildUrl(ctaLink)
  return (
    <div className="introText">
      {body && (
        <PortableText value={blocks} components={components} />
      )}
      {ctaLink && (<Link href={url}>
        <h2 className="introCta">
          <span>{cta && <Localize data={cta} />}&nbsp;</span>
        </h2>
      </Link>)}
      <div className="introCtaHr"></div>
    </div>
  )
}
export default Intro
