import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl } from "@/lib/utils"
import { ExhibitionDate } from "components/date"
import { GridImage } from "components/gridImage"
import { LinkTo } from "components/linkTo"
import { Exhibition } from "lib/interfaces"
import s from "styles/exhibitions.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: any
  exhibition: Exhibition
  heading?: string
  idx: number
  label: string
  margin?: string
  postsPerPage: number
  top?: boolean
}

export const ExhibitionPreview: FC<Props> = ({
  exhibition,
  fallbackImage,
  heading,
  idx,
  label,
  margin,
  postsPerPage,
  top = true
}) => {
  const { locale } = useRouter()
  return (
    <div style={ margin && { marginTop: margin }}>
      <h3
        className={`${s.heading}`}
        dangerouslySetInnerHTML={{__html: heading ? heading : "&nbsp;"}}
      />
      <LinkTo href={buildUrl(locale, exhibition.slug, exhibition._type)}>
        <GridImage
          alt={exhibition.title ? exhibition.title : ""}
          idx={idx}
          image={exhibition.mainImage?.asset ? exhibition.mainImage : fallbackImage}
          postsPerPage={postsPerPage}
          top={top}
        />
        {exhibition && <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
          {exhibition.title}
        </div>}
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
