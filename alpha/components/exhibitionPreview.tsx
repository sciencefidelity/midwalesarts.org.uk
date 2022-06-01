import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { buildUrl, urlFor } from "@/lib/utils"
import { ExhibitionDate } from "components/date"
import { LinkTo } from "components/linkTo"
import { Exhibition } from "lib/interfaces"
import s from "styles/exhibitions.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: any
  exhibition: Exhibition
  heading?: string
  label: string
  margin?: string
}

// const margin = "6rem"

export const ExhibitionPreview: FC<Props> = ({
  exhibition, fallbackImage, heading, label, margin
}) => {
  const { locale } = useRouter()
  return (
    <div style={ margin && { marginTop: margin }}>
      <h3
        className={`${s.heading}`}
        dangerouslySetInnerHTML={{__html: heading ? heading : "&nbsp;"}}
      />
      <LinkTo href={buildUrl(locale, exhibition.slug, exhibition._type)}>
        <Image
          src={urlFor(exhibition.mainImage?.asset
            ? exhibition.mainImage
            : fallbackImage)
            .width(624)
            .height(624)
            .auto("format")
            .quality(75)
            .url()}
          alt={exhibition.title}
          width={2000}
          height={2000}
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
