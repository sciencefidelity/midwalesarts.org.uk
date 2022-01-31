import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "lib/utils"
import GoogleMap from "components/googleMap"
import Link from "components/link"
import Localize from "components/localize"
import PortableText from "components/portableText"
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
                  width={468}
                  height={468}
                />
                {space.title.en &&
                  <div className="gridCaption">
                    <Localize data={space.title} />
                  </div>
                }
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
                  {space.title.en &&
                    <h4 className="spacesGridTitle">
                      <Localize data={space.title} />
                    </h4>
                  }
                  {space.body.en && (
                    <PortableText blocks={space.body} />
                  )}
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
