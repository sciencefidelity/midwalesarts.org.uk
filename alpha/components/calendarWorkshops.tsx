import { FC } from "react"
import { Workshop } from "lib/interfaces"
import s from "styles/workshops.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  workshops: Workshop[]
}

export const CalendarWorkshops: FC<Props> = ({ workshops }) => {
  return (
    <section className={`${s.calendarDay}`}>
      {workshops[0] && <h3 className={`${s.h3}`}>{workshops[0].day}s</h3>}
      {workshops[0] && <ul className={`${s.calendarList}`}>
        {workshops[0] && workshops.map(workshop =>
          <li key={workshop._id} className={`${s.calendarItem} ${u.flex}`}>
            <div>{workshop.startTime.replace(/[ap]m/i, "")}{" - "}
              {workshop.endTime.toLowerCase().replace(/\s/g, "")}{" "}
            </div>
            <div>{workshop.title}</div>
          </li>
        )}
      </ul>}
    </section>
  )
}
