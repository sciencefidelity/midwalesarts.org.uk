import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import type { Artist, Page } from "@/generated/schema"

const ArtistsPage = ({ page, artists }: { page: Page; artists: Artist[] }) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1>
            {locale === "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="subTitle">
            {locale === "cy" && page.subtitle.cy
              ? page.subtitle.cy
              : page.subtitle.en}
          </p>
        </div>
      </div>
      <div className="imageGrid">
        {!!artists &&
          artists.map(
            (artist: any) =>
              !!artist && (
                <div key={artist._id}>
                  <Link href={`/artists/${artist.slug.current}/`}>
                    <a>
                      <Image
                        src={urlFor(artist.mainImage)
                          .width(468)
                          .height(468)
                          .auto("format")
                          .quality(75)
                          .url()}
                        alt={artist.mainImage.caption}
                        width={468}
                        height={468}
                      />
                      <div className="gridCaption">{artist.title}</div>
                    </a>
                  </Link>
                </div>
              )
          )}
      </div>
    </section>
  )
}
export default ArtistsPage
