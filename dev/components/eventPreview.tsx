import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { dateOptions, urlFor } from "@/lib/utils"

const EventPreview = ({ heading, eventData, marginTop, grid }) => {
  const { locale } = useRouter()
  return (
    <>
      <div className="sidebarContainer" style={marginTop}>
        <div className="portableContainer">
          <p>{heading}</p>
        </div>
      </div>
      <div className={grid}>
        {eventData.map((event: any) => (
          <div key={event._id} style={{ margin: 0 }}>
            <Link href={`/events/${event.slug.en.current}`}>
              <a>
                <Image
                  src={urlFor(event.mainImage)
                    .width(468)
                    .height(468)
                    .auto("format")
                    .quality(75)
                    .url()}
                  alt={locale === "cy" && event.title.cy ? event.title.cy : event.title.en}
                  width={468}
                  height={468}
                />
                <div className="gridCaption">
                  {locale === "cy" && event.title.cy ? event.title.cy : event.title.en}
                </div>
                <div className="gridCaption">
                  {new Date(event.date).toLocaleDateString(locale, dateOptions)}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
export default EventPreview
