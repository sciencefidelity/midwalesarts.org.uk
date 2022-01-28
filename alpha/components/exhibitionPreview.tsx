import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import type { Exhibition } from "generated/schema"
import { dateOptionsShort, urlFor } from "@/lib/utils"

const ExhibitionPrieview = ({
  exhibition,
  heading
}: {
  exhibition: Exhibition
  heading: string
}) => {
  const { locale } = useRouter()
  return (
    <div className="exhibitionPreview">
      <p>{heading}</p>
      <Link href={`/exhibitions/${!!exhibition && exhibition.slug.en.current}`}>
        <a>
          <Image
            src={urlFor(exhibition.mainImage)
              .width(468)
              .height(468)
              .auto("format")
              .quality(75)
              .url()}
            alt={
              locale === "cy" && exhibition.title.cy
                ? exhibition.title.cy
                : exhibition.title.en
            }
            width={468}
            height={468}
          />
          <div className="gridCaption">
            {!!exhibition &&
              (locale === "cy" && exhibition.title.cy
                ? exhibition.title.cy
                : exhibition.title.en)}
          </div>
          <div className="gridCaption">
            {exhibition && (
              <span>
                {new Date(exhibition.dateStart).toLocaleDateString(
                  locale,
                  dateOptionsShort
                )}{" "}
                to{" "}
                {new Date(exhibition.dateEnd).toLocaleDateString(
                  locale,
                  dateOptionsShort
                )}
              </span>
            )}
          </div>
        </a>
      </Link>
    </div>
  )
}
export default ExhibitionPrieview
