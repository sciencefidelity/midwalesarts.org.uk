import { FC } from "react"
import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"
// Saturday, February 12th 2022
// dydd Sadwrn, Chwefror 12, 2022

interface Props {
  date: string
}

export const PostDate: FC<Props> = ({ date }) => {
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
