import { CSSProperties, FC } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { buildUrl, dayToNumber, getNextDate, urlFor } from "@/lib/utils"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/date"
import { Event, Workshop } from "lib/interfaces"
import s from "styles/events.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  eventData: Event[] | Workshop[]
  fallbackImage: any
  heading: string
  marginTop: CSSProperties
}

export const EventPreview: FC<Props> = ({
  eventData,
  fallbackImage,
  heading,
  marginTop
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
        {eventData.map(event => (
          <LinkTo
            href={buildUrl(locale, event.slug, event._type)}
            key={event._id}
            style={{ margin: 0 }}
            className={`${u.truncate}`}
          >
            <Image
              src={urlFor(event.mainImage ? event.mainImage : fallbackImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              alt={event.title}
              width={2000}
              height={2000}
            />
            {event.title &&
              <div className={`${s.caption} ${u.textRight}`}>
                {event.title}
              </div>
            }
            {<div className={`${s.caption} ${u.textRight}`}>
              <PostDate
                date={event.date ? event.date : getNextDate(dayToNumber(event.day))}
              />{event.startTime && ", " + event.startTime}
            </div>}
          </LinkTo>
        ))}
      </div>
    </>
  )
}
