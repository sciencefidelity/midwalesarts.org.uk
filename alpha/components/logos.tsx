import { FC } from "react"
import { useRouter } from "next/router"
import { ACW } from "components/acw"
import { GTG } from "components/gtg"
import { WG } from "components/wg"
import s from "styles/footer.module.scss"
import u from "styles/utils.module.scss"

export const Logos: FC = () => {
  const { locale } = useRouter()
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
        <a
          href="https://goodtogo.visitbritain.com/"
          target="blank"
          rel="noreferrer"
          style={{ margin: 0 }}
        >
          <span className={`${u.srOnly}`}>
            {locale === "cy" ? "Mae'n Dda i Ni Fynd" : "We're Good To Go"}
          </span>
          <div className={`${s.gtg}`}>
            <GTG />
          </div>
        </a>
      </div>
    </div>
  )
}
