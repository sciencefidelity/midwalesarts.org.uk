import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import type { Exhibition, Page } from "generated/schema"
import ExhibitionPrieview from "components/exhibitionPreview"
import { dateOptionsShort, urlFor } from "@/lib/utils"

const Exhibitions = ({
  page,
  currentExhibitions,
  futureExhibitions,
  pastExhibitions
}: {
  page: Page
  currentExhibitions: Exhibition[]
  futureExhibitions: Exhibition[]
  pastExhibitions: Exhibition[]
}) => {
  const { locale } = useRouter()
  return (
    <section>
      <div className="sidebarContainer">
        <div className="portableContainer">
          <h1>
            {locale == "cy" && page.title.cy ? page.title.cy : page.title.en}
          </h1>
          <p className="subTitle">
            {locale == "cy" && page.subtitle.cy
              ? page.subtitle.cy
              : page.subtitle.en}
          </p>
        </div>
      </div>
      <div className="exhibitionPreviewGrid">
        {!!currentExhibitions[0] && (
          <>
            {!!currentExhibitions && currentExhibitions.length === 1 ? (
              <ExhibitionPrieview
                heading={
                  locale === "cy"
                    ? "Arddangosfa gyfredol"
                    : "Current exhibition"
                }
                exhibition={currentExhibitions[0]}
              />
            ) : (
              <>
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
            )}
          </>
        )}
        {!!futureExhibitions[0] && (
          <ExhibitionPrieview
            heading={locale === "cy" ? "Arddangosfa nesaf" : "Next exhibition"}
            exhibition={!!futureExhibitions[0] && futureExhibitions[0]}
          />
        )}
      </div>
      <div className="sidebarContainer" style={{ marginTop: `6rem` }}>
        <div className="portableContainer">
          <p>
            {locale === "cy"
              ? "Arddangosfeydd y gorffennol"
              : "Past exhibitions"}
          </p>
        </div>
      </div>
      <div className="exhibitionGrid">
        {!!pastExhibitions &&
          pastExhibitions.map(
            exhibition =>
              !!exhibition && (
                <div key={exhibition._id} style={{ margin: 0 }}>
                  <Link href={`/exhibitions/${exhibition.slug.en.current}`}>
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
                    </a>
                  </Link>
                </div>
              )
          )}
      </div>
    </section>
  )
}

export default Exhibitions
