import { useRouter } from "next/router"
import type { LocaleRichText, LocaleString } from "generated/schema"

const Localize = ({ data }: {
  data: LocaleString | LocaleRichText
}) => {
  const { locale } = useRouter()
  return (
    <>
      {locale === "cy" && data.cy
        ? data.cy
        : data.en}
    </>
  )
}
export default Localize
