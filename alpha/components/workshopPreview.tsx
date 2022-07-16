import { useRouter } from "next/router"
import { dayToNumber, nextDate } from "lib/dateHelpers"
import { buildURL } from "lib/utils"
import { GridImage } from "components/gridImage"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Image, Workshop } from "lib/interfaces"
import s from "styles/workshops.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  fallbackImage: Image
  workshops: Workshop[]
}

export function WorkshopPreview({ fallbackImage, workshops }: Props) {
  const { locale = "en" } = useRouter()
  return (
    <div className={`${s.imageGrid} ${u.grid}`}>
      {workshops.map((workshop, idx) => (
        <LinkTo
          href={buildURL(locale, workshop.slug, workshop._type)}
          key={workshop._id}
          style={{ margin: 0 }}
          className={`${u.truncate}`}
        >
          <GridImage
            alt={workshop.title ?? ""}
            idx={idx}
            image={workshop.mainImage ?? fallbackImage}
            postsPerPage={12}
            top={false}
          />
          {workshop.title && (
            <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
              {workshop.title}
            </div>
          )}
          {workshop.day && (
            <div className={`${s.caption} ${u.textRight}`}>
              <PostDate
                date={nextDate(dayToNumber(workshop.day), workshop.frequency)}
              />
              {workshop.startTime &&
                `, ${workshop.startTime.toLowerCase().replace(/\s/g, "")}`}
            </div>
          )}
        </LinkTo>
      ))}
    </div>
  )
}
