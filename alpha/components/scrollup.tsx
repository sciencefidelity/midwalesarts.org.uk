import { FC } from "react"
import { LinkTo } from "components/linkTo"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  label: string
}
// TODO: change icon to svg
export const Scrollup: FC<Props> = ({ label }) => {
  return (
    <LinkTo href="#" tabIndex={-1}>
      <span className={`${u.srOnly}`}>{label}</span>
      <button className={`${s.scrollupContainer} ${u.fixed}`}>
        <span className={`${u.srOnly}`}>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 104 54"
          className={`${s.scrollup}`}
        >
          <title>{label}</title>
          <path
            d="M51.7 5l-48.1 48.1c-0.8 0.8-2.1 0.8-2.9 0 -0.8-0.8-0.8-2.1 0-2.9l49.6-49.6c0.8-0.8 2.1-0.8 2.9 0l49.6 49.6c0.8 0.8 0.8 2.1 0 2.9 -0.8 0.8-2.1 0.8-2.9 0l-48.1-48.1Z"
            fill="#999999"
          />
        </svg>
      </button>
    </LinkTo>
  )
}
