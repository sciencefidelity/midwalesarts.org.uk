import { FC } from "react"
import { useRouter } from "next/router"
import { LinkTo } from "components/linkTo"
import { LocaleString } from "lib/interfaces"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  label: LocaleString
}
// TODO: change icon to svg
export const Scrollup: FC<Props> = ({ label }) => {
  const { locale } = useRouter()
  return (
    <LinkTo href="#" tabIndex={-1}>
      <button className={`${s.scrollupContainer} ${u.fixed}`}>
        <span className={`${u.srOnly}`}>
          {label[locale]}
        </span>
        <img
          alt=""
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='scroll-up' viewBox='0 0 104 54'%3E%3Cpath d='M51.7 5l-48.1 48.1c-0.8 0.8-2.1 0.8-2.9 0 -0.8-0.8-0.8-2.1 0-2.9l49.6-49.6c0.8-0.8 2.1-0.8 2.9 0l49.6 49.6c0.8 0.8 0.8 2.1 0 2.9 -0.8 0.8-2.1 0.8-2.9 0l-48.1-48.1Z' fill='%23999999'/%3E%3C/svg%3E"
          loading="lazy"
          className={`${s.scrollup}`}
        />
      </button>
    </LinkTo>
  )
}
