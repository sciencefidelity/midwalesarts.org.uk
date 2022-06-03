import { FC } from "react"
import { useRouter } from "next/router"
import { buildUrl, dayToNumber, getNextDate } from "@/lib/utils"
import { GridImage } from "components/gridImage"
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
      {workshops.map((workshop, idx) => (
        <LinkTo
          href={buildUrl(locale, workshop.slug, workshop._type)}
          key={workshop._id}
          style={{ margin: 0 }}
          className={`${u.truncate}`}
        >
          <GridImage
            alt={workshop.title ? workshop.title : ""}
            idx={idx}
            image={workshop.mainImage ? workshop.mainImage : fallbackImage}
            postsPerPage={12}
            top={false}
          />
          {workshop.title &&
            <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
              {workshop.title}
            </div>
          }
          {workshop.day && <div className={`${s.caption} ${u.textRight}`}>
            <PostDate
              date={workshop.day && getNextDate(dayToNumber(workshop.day))}
            />
            {workshop.startTime
              && ", " + workshop.startTime.toLowerCase().replace(/\s/g, "")
            }
          </div>}
        </LinkTo>
      ))}
    </div>
  )
}
