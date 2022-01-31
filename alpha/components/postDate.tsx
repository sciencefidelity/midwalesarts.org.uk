import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"

const PostDate = ({ date }: { date: string }) => {
  const { locale } = useRouter()
  return (
    <>
      {locale === "cy"
        ? format(new Date(date),
          "eeee, MMMM Do yyyy",
          {locale: cy}
        )
        : format(new Date(date),
          "eeee, MMMM Do yyyy",
          {locale: enGB}
        )
      }
    </>
  )
}
export default PostDate
