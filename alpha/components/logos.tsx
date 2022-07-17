import { useRouter } from "next/router"
import { ACW } from "components/acw"
import { WG } from "components/wg"
import s from "styles/footer.module.scss"
import u from "styles/utils.module.scss"

export function Logos() {
  const { locale } = useRouter() as TRouter
  return (
    <div className={`${s.funderLogos} ${u.flex}`}>
      <a href="https://arts.wales" target="blank" rel="noreferrer">
        <span className={`${u.srOnly}`}>
          {locale === "cy"
            ? "Cyngor Celfyddydau Cymru"
            : "Arts Council of Wales"}
        </span>
        <div className={`${s.acw}`}>
          <ACW />
        </div>
      </a>
      <div className={`${s.logosRight} ${u.flex}`} style={{ margin: 0 }}>
        <a href="https://gov.wales" target="blank" rel="noreferrer">
          <span className={`${u.srOnly}`}>
            {locale === "cy" ? "Llywodraeth Cymru" : "Welsh Government"}
          </span>
          <div className={`${s.wg}`}>
            <WG />
          </div>
        </a>
      </div>
    </div>
  )
}
