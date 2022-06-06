import { CSSProperties, FC } from "react"
import { useRouter } from "next/router"
import { dayToNumber, nextDate } from "lib/dateHelpers"
import { buildUrl } from "lib/utils"
import { GridImage } from "components/gridImage"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Event, Image, Workshop } from "lib/interfaces"
import s from "styles/events.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  eventData: Event[] | Workshop[]
  fallbackImage: Image
  heading: string
  marginTop: CSSProperties
  postsPerPage: number
  top?: boolean
}

export const EventPreview: FC<Props> = ({
  eventData,
  fallbackImage,
  heading,
  marginTop,
  postsPerPage,
  top = true
}) => {
  const { locale } = useRouter()
  return (
    <>
      <div className={`${s.container} ${u.grid}`} style={marginTop}>
        <div className={`${s.title}`}>
          <h3 className={`${s.heading}`}>{heading}</h3>
        </div>
      </div>
      <div className={`${s.imageGrid} ${u.grid}`}>
        {eventData.map((event, idx: number) => (
          <div
            key={event._id}
            className={`${idx >= postsPerPage ? u.hidden : null}`}
          >
            <LinkTo
              href={buildUrl(locale, event.slug, event._type)}
              style={{ margin: 0 }}
              className={`${u.truncate}`}
            >
              <GridImage
                alt={event.title ? event.title : ""}
                idx={idx}
                image={event.mainImage ? event.mainImage : fallbackImage}
                postsPerPage={postsPerPage}
                top={top}
              />
              {event.title &&
                <div className={`${s.caption} ${u.textRight} ${u.semibold}`}>
                  {event.title}
                </div>
              }
              {(event.date || event.day) && <div className={`${s.caption} ${u.textRight}`}>
                <PostDate
                  date={event.date
                    ? event.date
                    : nextDate(dayToNumber(event.day), event.frequency)}
                />{event.startTime && ", " + event.startTime}
              </div>}
            </LinkTo>
          </div>
        ))}
      </div>
    </>
  )
}
