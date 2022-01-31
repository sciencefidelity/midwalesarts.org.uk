// TODO: move titles and placeholders into studio
import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { dateOptionsShort, urlFor } from "lib/utils"
import ExhibitionPrieview from "components/exhibitionPreview"
import Link from "components/link"
import Localize from "components/localize"
import { ExhibitionsProps } from "lib/interfaces"

const Exhibitions: FC<ExhibitionsProps> = ({
  page, currentExhibitions, futureExhibitions, pastExhibitions
}) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1><Localize data={page.title} /></h1>
          <p className="subTitle"><Localize data={page.subtitle} /></p>
        </div>
      </div>
      <div className="exhibitionPreviewGrid">
        {currentExhibitions[0] &&
          (currentExhibitions.length === 1
            ? <ExhibitionPrieview
              heading={
                locale === "cy"
                  ? "Arddangosfa gyfredol"
                  : "Current exhibition"
              }
              exhibition={currentExhibitions[0]}
            />
            : <>
              <ExhibitionPrieview
                heading={
                  locale === "cy"
                    ? "Arddangosfeydd cyfredol"
                    : "Current exhibitions"
                }
                exhibition={currentExhibitions[0]}
              />
              <ExhibitionPrieview
                heading={" "}
                exhibition={currentExhibitions[1]}
              />
            </>
          )
        }
        {futureExhibitions[0] && (
          <ExhibitionPrieview
            heading={locale === "cy" ? "Arddangosfa nesaf" : "Next exhibition"}
            exhibition={futureExhibitions[0]}
          />
        )}
      </div>
      <div className="sidebarContainer" style={{ marginTop: "6rem" }}>
        <div className="portableContainer">
          <p>
            {locale === "cy"
              ? "Arddangosfeydd y gorffennol"
              : "Past exhibitions"}
          </p>
        </div>
      </div>
      <div className="exhibitionGrid">
        {pastExhibitions && pastExhibitions.map(exhibition =>
          exhibition && (
            <div key={exhibition._id} style={{ margin: 0 }}>
              <Link href={`/exhibitions/${exhibition.slug.en.current}`}>
                <Image
                  src={urlFor(exhibition.mainImage)
                    .width(1000)
                    .height(1000)
                    .auto("format")
                    .quality(75)
                    .url()}
                  alt={
                    locale === "cy" && exhibition.title.cy
                      ? exhibition.title.cy
                      : exhibition.title.en
                  }
                  width={1000}
                  height={1000}
                />
                <div className="gridCaption">{exhibition.title.en}</div>
                <div className="gridCaption">
                  {new Date(exhibition.dateStart).toLocaleDateString(
                    locale,
                    dateOptionsShort
                  )}{" "}
                  to{" "}
                  {new Date(exhibition.dateEnd).toLocaleDateString(
                    locale,
                    dateOptionsShort
                  )}
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Exhibitions
