import { CSSProperties } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { dateOptions, urlFor } from "@/lib/utils"
import Link from "components/link"
import Localize from "components/localize"
import type { Event } from "generated/schema"

const EventPreview = ({ heading, eventData, marginTop, grid }: {
  heading: string
  eventData: Event[]
  marginTop: CSSProperties
  grid: string
}) => {
  const { locale } = useRouter()
  return (
    <>
      <div className="sidebarContainer" style={marginTop}>
        <div className="portableContainer">
          <p>{heading}</p>
        </div>
      </div>
      <div className={grid}>
        {eventData.map((event: Event) => (
          <div key={event._id} style={{ margin: 0 }}>
            <Link href={`/events/${event.slug.en.current}`}>
              <Image
                src={urlFor(event.mainImage)
                  .width(468)
                  .height(468)
                  .auto("format")
                  .quality(75)
                  .url()}
                alt={
                  locale === "cy" && event.title.cy
                    ? event.title.cy
                    : event.title.en
                }
                width={468}
                height={468}
              />
              <div className="gridCaption">
                <Localize data={event.title} />
              </div>
              <div className="gridCaption">
                {new Date(event.date).toLocaleDateString(locale, dateOptions)}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
export default EventPreview
