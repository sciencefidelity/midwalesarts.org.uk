import { FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { buildUrl, dayToNumber, getNextDate, urlFor } from "@/lib/utils"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Workshop } from "lib/interfaces"
import s from "styles/workshops.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: any
  workshops: Workshop[]
}

export const WorkshopPreview: FC<Props> = ({ fallbackImage, workshops }) => {
  const { locale } = useRouter()
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {workshops.map(workshop => (
        <LinkTo
          href={buildUrl(locale, workshop.slug, workshop._type)}
          key={workshop._id}
          style={{ margin: 0 }}
          className={`${u.truncate}`}
        >
          <Image
            src={urlFor(workshop.mainImage ? workshop.mainImage : fallbackImage)
              .width(468)
              .height(468)
              .auto("format")
              .quality(75)
              .url()}
            alt={workshop.title}
            width={2000}
            height={2000}
          />
          {workshop.title &&
            <div className={`${s.caption} ${u.textRight}`}>
              {workshop.title}
            </div>
          }
          {<div className={`${s.caption} ${u.textRight}`}>
            <PostDate
              date={workshop.day && getNextDate(dayToNumber(workshop.day))}
            />{workshop.startTime && ", " + workshop.startTime.toLowerCase().replace(/\s/g, "")}
          </div>}
        </LinkTo>
      ))}
    </div>
  )
}
