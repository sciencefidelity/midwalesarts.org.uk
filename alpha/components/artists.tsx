import { FC } from "react"
import Image from "next/image"
import { urlFor } from "@/lib/utils"
import Localize from "components/localize"
import Link from "components/link"
import { ArtistsProps } from "lib/interfaces"

const ArtistsPage: FC<ArtistsProps> = ({ page, artists }) => {
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1><Localize data={page.title} /></h1>
          <p className="subTitle"><Localize data={page.subtitle} /></p>
        </div>
      </div>
      <div className="imageGrid">
        {artists && artists.map(artist =>
          artist && (
            <Link
              href={`/artists/${artist.slug.current}`}
              style={{ margin: 0 }}
              key={artist._id}
            >
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
            </Link>
          )
        )}
      </div>
    </section>
  )
}
export default ArtistsPage
