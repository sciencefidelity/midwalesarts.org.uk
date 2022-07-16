import { useRouter } from "next/router"
import { FooterContact } from "components/footerContact"
import { FooterLinks } from "components/footerLinks"
import { Logos } from "components/logos"
import { Signup } from "components/signup"
import { Label, LocaleString, Organisation, Settings } from "lib/interfaces"
import s from "styles/footer.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  organisation: Organisation
  settings: Settings
}

export function Footer({ labels, organisation, settings }: Props) {
  const { locale = "" } = useRouter()
  const key: keyof LocaleString = locale === "cy" ? "cy" : "en"
  const year = new Date().getFullYear()
  return (
    <footer className={`${s.footer} ${u.relative}`}>
      <div className={`${s.footerContainer} ${u.grid} ${u.mAuto}`}>
        <FooterContact
          label={labels[4].text}
          organisation={organisation}
          settings={settings}
        />
        <div className={`${s.footerRight} ${u.grid}`}>
          <Signup labels={labels} />
          <Logos />
          <FooterLinks social={settings.social} />
        </div>
        <p className={`${s.smallCopy}`}>
          &copy; {settings.title[key]} {year}
        </p>
      </div>
    </footer>
  )
}
