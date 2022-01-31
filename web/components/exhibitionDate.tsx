import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"
// 4th November to 19th December 2021
//4ydd Tachwedd i 19eg Rhagfyr 2021
const ExhibitionDate = ({ dateEnd, dateStart }: {
  dateEnd: string
  dateStart: string
}) => {
  const { locale } = useRouter()
  return (
    <>
      {locale === "cy"
        ? format(new Date(dateStart),
          "do MMMM",
          {locale: cy}
        )
        : format(new Date(dateStart),
          "do MMMM",
          {locale: enGB}
        )
      }
      {" "}{locale === "cy" ? "i" : "to"}{" "}
      {locale === "cy"
        ? format(new Date(dateEnd),
          "do MMMM yyyy",
          {locale: cy}
        )
        : format(new Date(dateEnd),
          "do MMMM yyyy",
          {locale: enGB}
        )
      }
    </>
  )
}
export default ExhibitionDate
