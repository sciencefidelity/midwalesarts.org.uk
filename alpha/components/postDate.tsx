import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"
// Saturday, February 12th 2022
// dydd Sadwrn, Chwefror 12, 2022
const PostDate = ({ date }: { date: string }) => {
  const { locale } = useRouter()
  return (
    <>
      {locale === "cy"
        ? format(new Date(date),
          "eeee, MMMM do yyyy",
          {locale: cy}
        )
        : format(new Date(date),
          "eeee, MMMM do yyyy",
          {locale: enGB}
        )
      }
    </>
  )
}
export default PostDate
