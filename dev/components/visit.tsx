import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import sanityClient from "@/lib/sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import { urlFor } from "@/lib/utils"
import { Page, Space } from "generated/schema"
import GoogleMap from "components/googleMap"
// import "../scss/visit.scss"

const Visit = ({ page, spaces }: {
  page: Page
  spaces: Space[]
}) => {
  const { locale } = useRouter()
  return (
    <>
      <section>
        <div className="visitContainer">
          <h1>
            {locale === "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="subTitle">
            {locale === "cy" && page.subtitle.cy ? page.subtitle.cy : page.subtitle.en}
          </p>
          <div className="spacesGrid">
            {spaces.map(space => (
              <Link
                href={`#${space.slug.en.current}`}
                key={space._id}
                // style={{ margin: 0 }}
              >
                <a>
                  <Image
                    src={urlFor(space.mainImage)
                      .width(468)
                      .height(468)
                      .auto("format")
                      .quality(75)
                      .url()}
                    alt={locale === "cy" && space.title.cy ? space.title.cy : space.title.en}
                    width={468}
                    height={468}
                  />
                  <div className="gridCaption">
                    {locale === "cy" && space.title.cy ? space.title.cy : space.title.en}
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div className="spacesTextGrid">
            {spaces.map(space => (
              <div
                id={space.slug.en.current}
                style={{ margin: 0 }}
                key={space._id}
                className="spacesText"
              >
                <h4 className="spacesGridTitle">{locale === "cy" && space.title.cy ? space.title.cy : space.title.en}</h4>
                {space.body.en && (
                  <BlockContent
                    blocks={locale === "cy" && space.body.cy ? space.body.cy : space.body.en}
                    {...sanityClient.config()}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoogleMap />
    </>
  )
}
export default Visit
