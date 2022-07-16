import { useRouter } from "next/router"
import { buildURL } from "lib/utils"
import { ExhibitionDate } from "components/date"
import { GridImage } from "components/gridImage"
import { LinkTo } from "components/linkTo"
import { Exhibition, Image } from "lib/interfaces"
import s from "styles/exhibitions.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: Image
  exhibition: Exhibition
  heading?: string
  idx: number
  label: string
  margin?: string
  postsPerPage: number
  top?: boolean
}

export function ExhibitionPreview({
  exhibition,
  fallbackImage,
  heading,
  idx,
  label,
  margin,
  postsPerPage,
  top = true,
}: Props) {
  const { locale = "en" } = useRouter()
  return (
    <div style={{ marginTop: margin ?? "inherit" }}>
      <h3
        className={`${s.heading}`}
        // TODO: make this less dangerous
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: heading ?? "&nbsp;" }}
      />
      <LinkTo href={buildURL(locale, exhibition.slug, exhibition._type)}>
        <GridImage
          alt={exhibition.title ?? ""}
          idx={idx}
          image={
            exhibition.mainImage?.asset ? exhibition.mainImage : fallbackImage
          }
          postsPerPage={postsPerPage}
          top={top}
        />
        {exhibition && (
          <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
            {exhibition.title}
          </div>
        )}
        {exhibition && exhibition.dateStart && (
          <div className={`${s.caption} ${u.textRight}`}>
            <span>
              <ExhibitionDate
                dateEnd={exhibition.dateEnd}
                dateStart={exhibition.dateStart}
                label={label}
              />
            </span>
          </div>
        )}
      </LinkTo>
    </div>
  )
}

ExhibitionPreview.defaultProps = {
  heading: undefined,
  margin: undefined,
  top: true,
}
