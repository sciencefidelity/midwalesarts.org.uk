import { CSSProperties, FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { buildUrl, urlFor } from "@/lib/utils"
import { LinkTo } from "components/linkTo"
import { PostDate } from "components/postDate"
import { Event } from "lib/interfaces"
import s from "styles/events.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  eventData: Event[]
  heading: string
  marginTop: CSSProperties
  grid: string
}

export const EventPreview: FC<Props> = ({
  eventData, heading, marginTop, grid
}) => {
  const { locale } = useRouter()
  return (
    <>
      <div className={`${s.sidebarContainer} ${u.grid}`} style={marginTop}>
        <div className={`${s.portableContainer}`}>
          <p>{heading}</p>
        </div>
      </div>
      <div className={s[grid]}>
        {eventData.map(event => (
          <LinkTo
            href={buildUrl(locale, event.slug, event._type)}
            key={event._id}
            style={{ margin: 0 }}
          >
            <Image
              src={urlFor(event.mainImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              alt={event.title}
              width={2000}
              height={2000}
            />
            {event.title && <div className={`${s.gridCaption}`}>{event.title}</div>}
            <div className={`${s.gridCaption}`}>
              {event.date && <PostDate date={event.date} />}
            </div>
          </LinkTo>
        ))}
      </div>
    </>
  )
}
