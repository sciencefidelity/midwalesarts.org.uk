import { FC } from "react"
import Image from "next/image"
import Link from "components/link"
import { useRouter } from "next/router"
import { dateOptionsShort, urlFor } from "@/lib/utils"
import Localize from "components/localize"
import { ExhibitionPreviewProps } from "lib/interfaces"

const ExhibitionPrieview: FC<ExhibitionPreviewProps> = ({
  exhibition, heading
}) => {
  const { locale } = useRouter()
  return (
    <div className="exhibitionPreview">
      <p>{heading}</p>
      <Link
        href={`/exhibitions/${exhibition.slug.en.current}`}
      >
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
        {exhibition &&
          <div className="gridCaption">
            <Localize data={exhibition.title} />
          </div>
        }
        {exhibition && (
          <div className="gridCaption">
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
          </div>
        )}
      </Link>
    </div>
  )
}
export default ExhibitionPrieview
