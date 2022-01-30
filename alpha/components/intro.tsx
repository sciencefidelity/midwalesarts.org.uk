import Link from "components/link"
import PortableText from "components/portableText"
import Localize from "components/localize"

const Intro = ({ body, cta, ctaLink }) => {
  return (
    <div className="introText">
      {body && (
        <PortableText blocks={body} />
      )}
      <Link href={`/${ctaLink}/`}>
        <h2 className="introCta">
          <span><Localize data={cta} />&nbsp;</span>
        </h2>
      </Link>
      <div className="introCtaHr"></div>
    </div>
  )
}
export default Intro
