import { useRouter } from "next/router"

const Localize = ({ data }: {
  data: any
}) => {
  const { locale } = useRouter()
  return (
    <Localize
      {locale === "cy" && data.cy
        ? data.cy
        : data.en}
    />
  )
}

export default Localize
