import { useRouter } from "next/router"

const Localize = ({ data }: {
  data: any
}) => {
  const router = useRouter()
  const { locale } = router
  return (
    <Localize
      {...locale === "cy" && data.cy
        ? data.cy
        : data.en}
    />
  )
}

export default Localize
