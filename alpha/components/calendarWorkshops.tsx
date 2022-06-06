import { FC } from "react"
import { useRouter } from "next/router"
import { days, dayToNumber, freqString } from "lib/dateHelpers"
import { buildUrl } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Workshop } from "lib/interfaces"
import s from "styles/workshops.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  workshops: Workshop[]
}

export const CalendarWorkshops: FC<Props> = ({ workshops }) => {
  const { locale } = useRouter()
  return (
    <section className={`${s.calendarDay}`}>
      {workshops[0] && <h3 className={`${s.h3}`}>
        {days[locale][dayToNumber(workshops[0].day)]}
      </h3>}
      {workshops[0] && <ul className={`${s.calendarList}`}>
        {workshops[0] && workshops.map(workshop =>
          <li key={workshop._id} className={`${s.calendarItem} ${u.flex}`}>
            <div className={`${s.longTime}`}>
              {workshop.startTime.replace(/[ap]m/i, "")}{" - "}
              {workshop.endTime.toLowerCase().replace(/\s/g, "")}{" "}
            </div>
            <div className={`${s.shortTime} ${u.hidden}`}>
              {workshop.startTime.toLowerCase().replace(/\s/g, "")}
            </div>
            <div className={`${s.calendarTitle}`}>
              <LinkTo href={buildUrl(locale, workshop.slug, workshop._type)}>
                {workshop.title}
              </LinkTo>
              <span className={`${s.calendarDays}`}>
                {` ${freqString(workshop.day, Number(workshop.frequency), locale)}`}
              </span>
            </div>
          </li>
        )}
      </ul>}
    </section>
  )
}
