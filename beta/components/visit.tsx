import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { urlFor } from "lib/utils"
import GoogleMap from "components/googleMap"
import Link from "components/link"
import Localize from "components/localize"
import { VisitProps } from "lib/interfaces"

const Visit: FC<VisitProps> = ({ page, spaces }) => {
  const { locale } = useRouter()
  return (
    <>
      <section>
        <div className="visitContainer">
          <h1><Localize data={page.title} /></h1>
          <p className="subTitle"><Localize data={page.subtitle} /></p>
          <div className="spacesGrid">
            {spaces && spaces.map(space => (
              <Link
                href={`#${space.slug.en.current}`}
                key={space._id}
                style={{ margin: 0 }}
              >
                <Image
                  src={urlFor(space.mainImage)
                    .width(468)
                    .height(468)
                    .auto("format")
                    .quality(75)
                    .url()}
                  alt={
                    locale === "cy" && space.title.cy
                      ? space.title.cy
                      : space.title.en
                  }
                  width={2000}
                  height={2000}
                />
                <div className="gridCaption">
                  {space.title && <Localize data={space.title} />}
                </div>
              </Link>
            ))}
          </div>
          <div className="spacesTextGrid">
            {spaces.map(space => (
              space && (
                <div
                  id={space.slug.en.current}
                  style={{ margin: 0 }}
                  key={space._id}
                  className="spacesText"
                >
                  <h4 className="spacesGridTitle">
                    {space.title &&<Localize data={space.title} />}
                  </h4>
                  {space.body && <PortableText
                    value={locale === "cy" && space.body.cy
                      ? space.body.cy
                      : space.body.en}
                    components={components}
                  />}
                </div>
              )
            ))}
          </div>
        </div>
      </section>
      <GoogleMap />
    </>
  )
}
export default Visit
